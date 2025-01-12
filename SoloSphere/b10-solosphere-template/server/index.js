const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const jwt  = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const corsOptions = {
  origin: ['http://localhost:5173'],
  credentials: true,
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());


app.get('/',(req,res)=>{
    res.send('Hello nigro');
});

app.listen(port,()=>{{console.log(`Server is running on port ${port}`)}});


const verifyToken = (req, res, next) => {
  const token = req.cookies?.token
  if (!token) return res.status(401).send({ message: 'unauthorized access' })
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'unauthorized access' })
    }
    req.user = decoded
  })

  next()
}



const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ylf2c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    const jobsCollection = client.db("soloSphereDB").collection("Jobs");
    const bidsCollection = client.db("soloSphereDB").collection("bids");
    
    app.post('/jwt', async (req, res) => {
      const email = req.body
      // create token
      const token = jwt.sign(email, process.env.SECRET_KEY, {
        expiresIn: '365d',
      })
      console.log(token)
      res
        .cookie('token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        })
        .send({ success: true })
    })

    // logout || clear cookie from browser
    app.get('/logout', async (req, res) => {
      res
        .clearCookie('token', {
          maxAge: 0,
          secure: process.env.NODE_ENV === 'production',
          sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        })
        .send({ success: true })
    })


    app.post('/addJob',async(req,res)=>{
        const jobData = req.body;
        const result = await jobsCollection.insertOne(jobData);
        res.send(result);
    })

    app.get('/jobs',async(req,res)=>{
        const result = await jobsCollection.find({}).toArray();
        res.send(result);
    })

    app.get('/jobs/:email',async(req,res)=>{
        const email = req.params.email;
        const query = {'buyer.email':email};
        const result = await jobsCollection.find(query).toArray();
        res.send(result);
    })

    app.delete('/deleteJob/:id',async(req,res)=>{
      const id = req.params.id
      const query = {_id:new ObjectId(id)};
      const result = await jobsCollection.deleteOne(query);
      res.send(result);
    })
    app.get('/job/:id',async(req,res)=>{
      const id = req.params.id
      const query = {_id:new ObjectId(id)};
      const result = await jobsCollection.findOne(query);
      res.send(result)
    })

    app.put('/updateJob/:id',async(req,res)=>{
      const id = req.params.id
      const query = {_id:new ObjectId(id)};
      const updatedData = req.body;
      const updateDoc = {
        $set:updatedData
      }
     const options = {upsert:true}
     const result = await jobsCollection.updateOne(query,updateDoc,options); 
      res.send(result);
    })

    app.post('/addBid',async(req,res)=>{
      const bidData = req.body;
      const query = {email:bidData.email,jobID:bidData.jobID};


      const alreadyExit = await bidsCollection.findOne(query);
      if(alreadyExit){
        console.log("Already bid on this job");
        
        return res.status(400).send("Already placed a bid on this job");
      }
      
      const bids = await bidsCollection.insertOne(bidData);
      const filter = {_id:new ObjectId(bidData.jobID)};
      const update = {
        $inc:{bid_count:1}
      }
      const updated = await jobsCollection.updateOne(filter,update);
      console.log(updated);
      res.send(bids);
  })

  app.get('/bids/:email',verifyToken,async(req,res)=>{
    const decodedEmail = req.user?.email
    const isBuyer = req.query.buyer;
    const email = req.params.email;

    if(decodedEmail !== email){
      return res.status(401).send('Unauthorized Access');
    }
    let query;
    if(isBuyer){
      query = {buyer:email}
    }
    else {
      query = {email:email}
    }
    const result = await bidsCollection.find(query).toArray();
    res.send(result);
  })

  app.patch('/bid-status/:id',async(req,res)=>{
    const id = req.params.id
    const status = req.body.status;
    const filter = {_id:new ObjectId(id)}; 
    const updated = {
      $set:{status}
    }
    const result = await bidsCollection.updateOne(filter,updated);
    res.send(result);
  })

  app.get('/allJobs',async(req,res)=>{
    const filter = req.query.filter
    const search = req.query.search;
    const sort = req.query.sort;
    let query = {title:{$regex:search,$options:'i'}};
    let options = {};
    if(sort){
      options = {sort:{deadline:sort === 'asc' ? 1 : -1}}
    }

    if(filter){
      query.category = filter;
    }
    const result = await jobsCollection.find(query,options).toArray();
    res.send(result);
  })



  } finally {
    
  }
}
run().catch(console.dir);
