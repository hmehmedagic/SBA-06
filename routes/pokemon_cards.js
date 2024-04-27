const express = require("express");
const router = express.Router();
const PokemonCard = require("../models/pokemon_card");
const pokemonCardsController = require("../controllers/pokemonCardsController");

router
    .route("/")
    .get(pokemonCardsController.fetchAllCards)
    .post(pokemonCardsController.createCard);

router
    .route("/:id")
    .get(pokemonCardsController.fetchCard)
    .put(pokemonCardsController.updateCard)
    .delete(pokemonCardsController.deleteCard);

module.exports = router;