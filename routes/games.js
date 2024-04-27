const express = require("express");
const router = express.Router();
const Game = require("../models/game");
const gamesController = require("../controllers/gamesController");

router
    .route("/")
    .get(gamesController.fetchAllGames)
    .post(gamesController.createGame);

router
    .route("/:id")
    .get(gamesController.fetchGame)
    .put(gamesController.updateGame)
    .delete(gamesController.deleteGame);

module.exports = router;