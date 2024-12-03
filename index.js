const dotenv = require('dotenv');
const express = require('express');
const port = process.env.PORT || 5000
const app = express();

app.get('/', (req,res) => {
    res.send('Movie Server Started')
})

app.listen(port, () => {
    console.log(`Movie Server is running on port ${port}`);
})