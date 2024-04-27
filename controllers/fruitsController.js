const Fruit = require("../models/fruit");

const fetchAllFruits = async(req, res) => {
    try {
        const fruits = await Fruit.find();
        if (!fruits) {
            res.status(404).json({ error: "Fruits does not exist" });
            return;
        }
        res.json(fruits);
    } catch (error) {
        console.error("Apologies, but we had an issue retrieving Fruit data");
    }
};

const fetchFruit = async(req, res) => {
    try {
        const fruit = await Fruit.findById(req.params.id);
        if (!fruit) {
            res.status(404).json({ error: "Fruit not found" });
            return;
        }
        res.json(fruit);
    } catch (error) {
        console.error(`We are sorry for the inconvience, but we were unable to locate fruit: ${fruit.title}`);
    }
};

const createFruit = async(req, res) => {
    console.log(`BODY: ${req.body}`);

    const { name, color, ready_to_eat } = req.body;

    try {
        const fruit = await Fruit.create({
            name,
            color,
            ready_to_eat,
        });
        res.json(fruit);
    } catch (error) {
        console.error("We are unable to process your request at this time. Please try again.");
    }
};

const updateFruit = async(req, res) => {
    const { name, color, ready_to_eat } = req.body;

    try {
        await Fruit.findByIdAndUpdate(req.params.id, {
            name,
            color,
            ready_to_eat,
        });
    } catch (error) {
        console.error(`We are unable to update ${req.params.id} at this time. Please try again.`);
    }

    try {
        res.json(await Fruit.findById(req.params.id));
    } catch (error) {
        console.error(`We are having an issue retrieving ${req.params.id} at this time. Please try again.`);
    }
}

const deleteFruit = async(req, res) => {
    try {
        await Fruit.findByIdAndDelete(req.params.id);
        res.json({ success: "Record has been deleted" });
    } catch (error) {
        console.error(`We are unable to delete ${req.params.id} at this time. Please try again.`);
    }
}

module.exports = {
    fetchAllFruits,
    fetchFruit,
    createFruit,
    updateFruit,
    deleteFruit
}