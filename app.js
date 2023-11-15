//DEPENDENCIES
const cors = require('cors');   //to prevent cross orgin errors
const express = require('express'); // for our routes


//CONFIGURATIONS
const app = express();



//Middleware
app.use(cors());
app.use(express.json()); //to parse our incoming data.



//PRIME ROUTES
app.get('/', (req, res) =>{
    res.send('Welcome to StudyBuddy!')
})


app.get('*', (req, res) =>{
    res.status(420).send("You're lost")
})