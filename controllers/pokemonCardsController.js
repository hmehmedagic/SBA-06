const Card = require("../models/pokemon_card");

const fetchAllCards = async(req, res) => {
    try {
        const cards = await Card.find();
        if (!cards) {
            res.status(404).json({ error: "Cards does not exist" });
            return;
        }
        res.json(cards);
    } catch (error) {
        console.error("Apologies, but we had an issue retrieving Pokemon Card data");
        res.status(500).json({ success: false, error: error.message });
    }
};

const fetchCard = async(req, res) => {
    try {
        const card = await Card.findById(req.params.id);

        if (!card) {
            res.status(404).json({ error: "Card not found" });
            return;
        }

        res.json(card);
    } catch (error) {
        console.error(`We are sorry for the inconvience, but we were unable to locate game: ${card.title}`);
        res.status(500).json({ success: false, error: error.message });
    }
};

const createCard = async(req, res) => {
    console.log(`BODY: ${req.body}`);

    const {
        name,
        element,
        height,
        weight,
        set,
        set_number,
        hp,
        attacks,
        pokemon_power,
        weakness,
        resistance,
        retreat_cost,
        description,
        holographic
    } = req.body;

    try {
        const card = await Card.create({
            name,
            element,
            height,
            weight,
            set,
            set_number,
            hp,
            attacks,
            pokemon_power,
            weakness,
            resistance,
            retreat_cost,
            description,
            holographic
        });
        res.json(card);
    } catch (error) {
        console.error("We are unable to process your request at this time. Please try again.");
        res.status(500).json({ success: false, error: error.message });
    }
};

const updateCard = async(req, res) => {
    const {
        name,
        element,
        height,
        weight,
        set,
        set_number,
        hp,
        attacks,
        pokemon_power,
        weakness,
        resistance,
        retreat_cost,
        description,
        holographic
    } = req.body;

    try {
        await Card.findByIdAndUpdate(req.params.id, {
            name,
            element,
            height,
            weight,
            set,
            set_number,
            hp,
            attacks,
            pokemon_power,
            weakness,
            resistance,
            retreat_cost,
            description,
            holographic
        });
    } catch (error) {
        console.error(`We are unable to update ${req.params.id} at this time. Please try again.`);
        res.status(500).json({ success: false, error: error.message });
    }

    try {
        res.json(await Card.findById(req.params.id));
    } catch (error) {
        console.error(`We are having an issue retrieving ${req.params.id} at this time. Please try again.`);
        res.status(500).json({ success: false, error: error.message });
    }
}

const deleteCard = async(req, res) => {
    try {
        await Card.findByIdAndDelete(req.params.id);
        res.json({
            success: "Record has been deleted"
        })
    } catch (error) {
        console.error(`We are unable to delete ${req.params.id} at this time. Please try again.`);
        res.status(500).json({ success: false, error: error.message });
    }
}

module.exports = {
    fetchAllCards,
    fetchCard,
    createCard,
    updateCard,
    deleteCard
}