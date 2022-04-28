// Create Dependecies 
const cors = require("cors"); // => Cors

const express = require("express") // => Express

const app = express() // => Configure the express application 

// Initializaition of middleware
app.use(cors());
app.use(express.json()); // -> Parson incoming JSON


// EXPORT Application

module.exports = app;