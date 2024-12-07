require('dotenv').config();
const cors = require('cors');
const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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

        const moviesCollection = client.db('moviesDB').collection('movies');
        const favoritesCollection = client.db('moviesDB').collection('favorites');
        const topPicksCollection = client.db('moviesDB').collection('topPicks');

        // Movie related API

        // Movie Get API
        app.get('/movies', async (req, res) => {
            const { sortBy, search } = req.query;
            let result;
            let option = {};
            if (sortBy === 'rating') {
                result = await moviesCollection.find().sort({ rating: -1 }).limit(6).toArray();
            }
            else if (search) {
                option = {title: {$regex : search, $options: "i"}}
                result = await moviesCollection.find(option).toArray();
            }
            else {
                result = await moviesCollection.find().toArray();
            }

            res.send(result);
        })



        // Top picks Post get api
        app.post('/topPicks', async (req, res) => {
            const data = req.body;
            const result = await topPicksCollection.insertMany(data);
            res.send(result)
        })

        // top picks movie get Post api
        app.get('/topPicks', async (req, res) => {
            const result = await topPicksCollection.find().toArray();
            res.send(result)
        })

        // Movie POST API
        app.post('/movies', async (req, res) => {
            const data = req.body;
            console.log(data);
            const result = await moviesCollection.insertOne(data);
            res.send(result);
        })

        // single Movie GET API
        app.get('/movies/:id', async (req, res) => {
            const id = req.params.id;
            console.log(id);
            const query = { _id: new ObjectId(id) };
            const result = await moviesCollection.findOne(query)
            console.log(result);
            res.send(result)
        })

        // Updating movie data with PATCH
        app.patch('/movies/:id', async (req, res) => {
            const id = req.params.id;
            console.log(id);
            const data = req.body;
            const query = {_id: new ObjectId(id)};
            console.log(query);
            const update = {
                $set: data 

            }
            const result = await moviesCollection.updateOne(query, update)
            console.log(result);
            res.send(result)
        })

        // Deleting single movie from the server
        app.delete('/movies/:id', async (req, res) => {
            const id = req.params.id;
            console.log(id);
            const query = { _id: new ObjectId(id) };
            const result = await moviesCollection.deleteOne(query);
            console.log(result);
            res.send(result);
        })

        // This is the POST API for favorites
        app.post('/favorites', async (req, res) => {
            const data = req.body;
            const result = await favoritesCollection.insertOne(data);
            res.send(result);
        })

        // This is the get api for the favorites
        app.get('/favorites', async (req, res) => {
            const { favOf } = req.query;
            const query = { email: favOf };
            const result = await favoritesCollection.find(query).toArray();
            res.send(result)
        })

        // Deleting favorites movie API
        app.delete('/favorites/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await favoritesCollection.deleteOne(query);
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