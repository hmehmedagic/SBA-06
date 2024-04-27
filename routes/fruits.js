const express = require("express");
const router = express.Router();
const Fruit = require("../models/fruit");
const fruitsController = require("../controllers/fruitsController");

router
    .route("/")
    .get(fruitsController.fetchAllFruits)
    .post(fruitsController.createFruit);

router
    .route("/:id")
    .get(fruitsController.fetchFruit)
    .put(fruitsController.updateFruit)
    .delete(fruitsController.deleteFruit);

module.exports = router;