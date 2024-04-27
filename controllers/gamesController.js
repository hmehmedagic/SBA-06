const Game = require("../models/game");

const fetchAllGames = async(req, res) => {
    try {
        const games = await Game.find();
        if (!games) {
            res.status(404).json({ error: "Games does no exist" });
            return;
        }
        res.json(games);
    } catch (error) {
        console.error("Apologies, but we had an issue retrieving Game data");
    }
};

const fetchGame = async(req, res) => {
    try {
        const game = await Game.findById(req.params.id);
        if (!game) {
            res.status(404).json({ error: "Game not found" });
            return;
        }
        res.json(game);
    } catch (error) {
        console.error(`We are sorry for the inconvience, but we were unable to locate game: ${game.title}`);
    }
};

const createGame = async(req, res) => {
    console.log(`BODY: ${req.body}`);

    const { title, genre, release_date, description } = req.body;

    try {
        const game = await Game.create({
            title,
            genre,
            release_date,
            description,
        });
        res.json(game);
    } catch (error) {
        console.error("We are unable to process your request at this time. Please try again.");
    }
};

const updateGame = async(req, res) => {
    const { title, genre, release_date, description } = req.body;

    try {
        await Game.findByIdAndUpdate(req.params.id, {
            title,
            genre,
            release_date,
            description,
        });
    } catch (error) {
        console.error(`We are unable to update ${req.params.id} at this time. Please try again.`);
    }

    try {
        res.json(await Game.findById(req.params.id));
    } catch (error) {
        console.error(`We are having an issue retrieving ${req.params.id} at this time. Please try again.`);
    }
}

const deleteGame = async(req, res) => {
    try {
        await Game.findByIdAndDelete(req.params.id);
        res.json({ success: "Record has been deleted" });
    } catch (error) {
        console.error(`We are unable to delete ${req.params.id} at this time. Please try again.`);
    }
}

module.exports = {
    fetchAllGames,
    fetchGame,
    createGame,
    updateGame,
    deleteGame
}