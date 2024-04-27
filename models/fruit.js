const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
    name: String,
    color: String,
    ready_to_eat: Boolean,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

module.exports = Fruit;