const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to the Home Page!");
});

app.get("/about", (req, res) => {
    res.send("This is the About Page.");
});

app.post("/contact", (req, res) => {
    res.send(`Message received: ${req.body.message}`);
});
