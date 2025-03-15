
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

let dataStore = []; // Temporary in-memory storage

// GET route
app.get("/data", (req, res) => {
  res.json({ success: true, data: dataStore });
});

// POST route
app.post("/data", (req, res) => {
  const newData = req.body;
  if (!newData || Object.keys(newData).length === 0) {
    return res.status(400).json({ success: false, message: "Invalid data" });
  }
  dataStore.push(newData);
  res.status(201).json({ success: true, message: "Data added", data: newData });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
