// Importing required dependencies
const express = require("express"); 
const path = require("path"); 

// Creating an instance of Router from Express
const htmlRouter = express.Router();

// Route handler for serving the 'notes.html' file
htmlRouter.get('/notes', (req, res) => {
    // Send the 'notes.html' file as a response
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// Route handler for serving the 'index.html' file for all other routes
htmlRouter.get("*", (req, res) => {
    // Send the 'index.html' file as a response
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Exporting the router instance
module.exports = htmlRouter;
