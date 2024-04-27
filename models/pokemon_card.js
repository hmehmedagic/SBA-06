const mongoose = require("mongoose");

const pokemon_cardSchema = new mongoose.Schema({
    name: String,
    element: String,
    height: {
        feet: Number,
        inches: Number
    },
    weight: Number,
    set: String,
    set_number: String,
    hp: Number,
    attacks: [{
        _id: false,
        name: String,
        damage: Number,
        cost: [{
            _id: false,
            element: String,
            num_of_energy: Number
        }],
        description: String,
    }],
    pokemon_power: {
        _id: false,
        name: String,
        description: String
    },
    weakness: String,
    resistance: String,
    retreat_cost: {
        _id: false,
        element: String,
        num_of_energy: Number
    },
    description: String,
    holographic: Boolean
});

const PokemonCard = mongoose.model("PokemonCard", pokemon_cardSchema);

module.exports = PokemonCard;