const music = require('./bs_songs.json')
var seeder = require("mongoose-seed");

// Connect to MongoDB via Mongoose
seeder.connect("mongodb://localhost/musicDB", function () {
    // Load Mongoose models
    seeder.loadModels(["db/models/musicSchema.js"]);

    // Clear specified collections
    seeder.clearModels(["Music"], function () {
        // Callback to populate DB once collections have been cleared
        seeder.populateModels(music, function () {
            seeder.disconnect();
        });
    });
});