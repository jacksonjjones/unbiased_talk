const express = require("express");
const path = require("path");

const htmlRouter = express.Router();

htmlRouter.get("/notes", function (req,res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});


htmlRouter.get("*", function (req,res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

module.exports = htmlRouter;