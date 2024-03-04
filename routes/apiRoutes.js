// Importing required dependencies
const express = require("express");
const fs = require("fs");

// Creating an instance of Router from Express
const apiRouter = express.Router();

//Array to store note data
let createNoteData = [];

// GET request handler for retrieving notes
apiRouter.get("/notes", (req, res) => {
    // Read the contents of the 'db.json' file
    fs.readFile("db/db.json", "utf8", (err, data) => {
        if (err) {
            // If an error occurs while reading the file, send a 500 server error response
            console.error('Error reading file:', err);
            return res.status(500).send('Server Error');
        }

        // Parse the JSON data to an array of notes
        createNoteData = JSON.parse(data);

        // Send the array of notes as a JSON response
        res.json(createNoteData);
    });
});

// POST request handler for adding a new note
apiRouter.post("/notes", (req, res) => {
    // Read the contents of the 'db.json' file
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) {
            // If an error occurs while reading the file, send a 500 server error response
            console.error('Error reading file:', err);
            return res.status(500).send('Server Error');
        }

        // Parse the JSON data to an array of notes
        createNoteData = JSON.parse(data);

        // Assign a unique ID to the new note
        req.body.id = createNoteData.length;

        // Push the new note to the array of notes
        createNoteData.push(req.body);

        // Convert the array of notes back to JSON format
        const updatedNotes = JSON.stringify(createNoteData);

        // Write the updated notes array to the 'db.json' file
        fs.writeFile("./db/db.json", updatedNotes, "utf8", (err) => {
            if (err) {
                // If an error occurs while writing the file, send a 500 server error response
                console.error('Error writing file:', err);
                return res.status(500).send('Server Error');
            }

            // Send the updated notes array as a JSON response
            res.json(JSON.parse(updatedNotes));
        });
    });
});

// DELETE request handler for deleting a note by ID
apiRouter.delete("/notes/:id", (req, res) => {
    // Read the contents of the 'db.json' file
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) {
            // If an error occurs while reading the file, send a 500 server error response
            console.error('Error reading file:', err);
            return res.status(500).send('Server Error');
        }

        // Parse the JSON data to an array of notes
        createNoteData = JSON.parse(data);

        // Filter out the note with the specified ID
        createNoteData = createNoteData.filter((note) => note.id != req.params.id);

        // Convert the filtered notes array back to JSON format
        const updatedNotes = JSON.stringify(createNoteData);

        // Write the updated notes array to the 'db.json' file
        fs.writeFile("./db/db.json", updatedNotes, "utf8", (err) => {
            if (err) {
                // If an error occurs while writing the file, send a 500 server error response
                console.error('Error writing file:', err);
                return res.status(500).send('Server Error');
            }

            // Send the updated notes array as a JSON response
            res.json(JSON.parse(updatedNotes));
        });
    });
});

module.exports = apiRouter;



