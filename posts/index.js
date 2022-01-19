const express = require("express");
const { randomBytes } = require("crypto");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const post = {};

app.get("/post", (req, res) => {
    res.send(post);
});

app.post("/post", (req, res) => {
    const id = randomBytes(5).toString("hex");
    const { title } = req.body;

    post[id] = {
        id,
        title,
    };

    res.status(201).send(post[id]);
});

app.listen(4000, () => {
    console.log("Listening on Port::4000");
});
