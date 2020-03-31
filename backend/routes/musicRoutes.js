const express = require("express");

const app = express();

const { getAllMusic, getCertainMusics } = require("../controllers/musicController");

app.get("/", getAllMusic);
app.get("/:query", getCertainMusics)

module.exports = app;