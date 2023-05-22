const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
dotenv.config();

const db = process.env.MONGO_URI;

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => {
        console.log("Mongodb connected")
    }).catch((error) => console.log(error));

app.use(cors());

app.get("/", (req, res) => {
    res.send("server is running")
});

const PORT = process.env.PORT || 5000;

app.listen(PORT || 5000, () => {
    console.log("Port is running at: ", PORT)
})