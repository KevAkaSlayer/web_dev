const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// espressoEmporium
// VsFQeRAOFCwH55Cy



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ylf2c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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

    const coffee = client.db("coffeeDB").collection("coffee");


    app.get('/coffee', async (req, res) => {
        const cursor = coffee.find();
        const results = await cursor.toArray();
        res.send(results);
    });

    app.post('/coffee', async (req, res) => {
        const newCoffee = req.body;
        const result = await coffee.insertOne(newCoffee);
        res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally { 
    // await client.close();
  }
}
run().catch(console.dir);








app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});