require('dotenv').config();
const cors = require('cors');
const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// MongoDB uri and client set up
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.kbg9j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});






async function run() {
    try {

        const moviesCollection = client.db('moviesDB').collection('movies')

        // Movie related API

        // Movie Get API
        app.get('/movies', async (req, res) => {
            const { sortBy } = req.query;
            let result;
            if(sortBy === 'rating'){
                result = await moviesCollection.find().sort({rating: -1}).toArray()
            }
            else{
                result = await moviesCollection.find().toArray();
            }
            
            res.send(result);
        })

        // Movie POST API
        app.post('/movies', async (req, res) => {
            const data = req.body;
            console.log(data);
            const result = await moviesCollection.insertOne(data);
            res.send(result);
        })




        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    finally {
        // await client.close();
    }
}
run()











app.get('/', (req, res) => {
    res.send('Movie Server Started')
})

app.listen(port, () => {
    console.log(`Movie Server is running on port ${port}`);
})