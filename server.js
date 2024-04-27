const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const connectToDb = require("./config/connectToDb");

const cors = require("cors");

app.use(express.urlencoded());
app.use(express.json());

app.use(cors());

connectToDb();

//MIDDLEWARE SECTION
const fruits = require("./routes/fruits");
const games = require("./routes/games");
const pokemon_cards = require("./routes/pokemon_cards");

app.get("/", (req, res) => {
    console.log("Landing Page");
});

app.use("/fruits", fruits);
app.use("/games", games);
app.use("/pokemon_cards", pokemon_cards);

app.listen(PORT, () => {
    console.log(`Express server started on port: ${PORT}.`);
})