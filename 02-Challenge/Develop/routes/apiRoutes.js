const express = require('express');
const path = require('path');
const fs = require('fs');

const apiRouter = express.Router();

let createNoteData = [];

app.use(express.json());
app.use(express.urlencoded({extended: true}));

