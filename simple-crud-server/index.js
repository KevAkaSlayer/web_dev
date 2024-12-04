const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();

const { MongoClient, ServerApiVersion ,ObjectId } = require('mongodb');


app.use (cors());
app.use(express.json());

// 8HWZzDUZiaH98MuK

const uri = "mongodb+srv://kevAkaSlayer:8HWZzDUZiaH98MuK@cluster0.ylf2c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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

    await client.connect();
    const database = client.db("usersDB");
    const usersCollection = database.collection("users");

    app.get('/users',async(req,res)=>{
      const cursor = usersCollection.find()
      const users = await cursor.toArray()
      res.send(users)
    })

    app.get('/users/:id',async(req,res)=>{
      const id = req.params.id
      const query = {_id: new ObjectId(id)}
      const user = await usersCollection.findOne(query)
      res.send(user)
    })

    app.post('/users',async(req,res)=>{
      const user = req.body
      console.log(user);
      const result = await usersCollection.insertOne(user)
      res.send(result)
    })

    app.put('/users/:id',async(req,res)=>{
      const id = req.params.id
      const updatedUser = req.body
      const filter = {_id: new ObjectId(id)}
      const options = {upsert: true}
      const updateDoc = {
        $set: {
          name: updatedUser.name,
          email: updatedUser.email,
        },
      }
      const result = await usersCollection.updateOne(filter,updateDoc,options)
      res.send(result)

    })
    app.delete('/users/:id',async(req,res)=>{
      const id = req.params.id
      console.log('please delete this id:',id);
      const query = {_id: new ObjectId(id)}
      const result = await usersCollection.deleteOne(query)
      res.send(result)
    })


    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    
  }
}
run().catch(console.dir);




app.get('/', (req, res) => {
  res.send('hello ok!')
})

app.listen(port, () => {
  console.log(`Example app listening at port:${port}`)
})