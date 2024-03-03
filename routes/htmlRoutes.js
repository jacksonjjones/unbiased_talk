const express = require("express");
const path = require("path");

const htmlRouter = express.Router();

htmlRouter.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

htmlRouter.get("/api/notes", function (req, res) {
    return res.sendFile(path.json(__dirname, "db/db.json"));
  });
  
htmlRouter.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = htmlRouter;