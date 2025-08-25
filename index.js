const express = require("express");
const mongoose = require('mongoose');
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World from Node API");
});

mongoose.connect("mongodb+srv://manish30d1999:mks@backenddb.olpr9oy.mongodb.net/NodeJS_API?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    }).catch((err) => {
        console.log("Error connecting to MongoDB:", err);
    });