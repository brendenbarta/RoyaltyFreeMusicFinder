const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/musicRoutes")
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb://localhost/musicDB", {useNewUrlParser: true})
.then(success => console.log("DB connected successfully"))
.catch(err => console.log("error connecting to database...", err))

app.use("/music", route);

app.listen(PORT, () => console.log(`app is running on port ${PORT}`))