const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
    title: String,
    genre: [String],
    release_date: Date,
    developer: String,
    publisher: String,
    platform: [String],
    mode: [String],
    description: String,
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;