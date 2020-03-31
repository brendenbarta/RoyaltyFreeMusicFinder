const mongoose = require("mongoose");

const musicSchema = mongoose.Schema({
    url: String,
    title: String,
    producer: String,
    keyWords: [String],
    description: String
})

module.exports = mongoose.model("Music", musicSchema);