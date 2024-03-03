const express = require("express");
const path = require("path");
const fs = require("fs");

const apiRouter = express.Router();

let createNoteData = [];

apiRouter.get("/notes", (req, res) => {
  try {
    createNoteData = fs.readFileSync("db/db.json", "utf8");
    createNoteData = JSON.parse(createNoteData);
  } catch (err) {
    console.log('Error:', err);
        res.status(500).send('Server Error');
  }
  res.json(createNoteData);
});

apiRouter.post("/notes", (req, res) => {
  try {
    createNoteData = fs.readFileSync("./db/db.json", "utf8");
    createNoteData = JSON.parse(createNoteData);
    req.body.id = createNoteData.length;
    createNoteData.push(req.body);
    createNoteData = JSON.stringify(createNoteData);
    fs.writeFile("./db/db.json", createNoteData, "utf8", function (err) {
      if (err) throw err;
    });

    res.json(JSON.parse(createNoteData));
  } catch (err) {
    console.log('Error:', err);
    res.status(500).send('Server Error');
  }
});

apiRouter.delete("/notes/:id", (req, res) => {
  try {
    createNoteData = fs.readFileSync("./db/db.json", "utf8");
    createNoteData = JSON.parse(createNoteData);
    createNoteData = createNoteData.filter(function (note) {
      return note.id != req.params.id;
    });
    createNoteData = JSON.stringify(createNoteData);

    fs.writeFile("./db/db.json", createNoteData, "utf8", function (err) {
      if (err) throw err;
    });

    res.send(JSON.parse(createNoteData));
  } catch (err) {
    console.log('Error:', err);
        res.status(500).send('Server Error');
  }
});

module.exports = apiRouter;


