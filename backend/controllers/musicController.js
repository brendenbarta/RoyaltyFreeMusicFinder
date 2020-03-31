const Music = require("../db/models/musicSchema")

module.exports.getAllMusic = (req, res) => {
    Music.find((err, data) => {
        if(err) res.send(err)
        res.json(data)
    })
}

module.exports.getCertainMusics = (req, res) => {
    const {query} = req.params;
    Music.find({keyWords: query}, (err, data) => {
        if(err) res.send(err);
        res.json(data)
    })
}