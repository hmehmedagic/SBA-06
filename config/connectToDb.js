require("dotenv").config();

const mongoose = require("mongoose");

const connectToDb = async() => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Connected to MongoDB Cluster");
    } catch (error) {
        console.log(`Something went wrong: ${error.name}: ${error.message}`);
    }
}

module.exports = connectToDb;