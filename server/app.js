const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const clientModel = require("./models/client.model.js");

const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
const path = require("path");

// This is used during the deployment phase
const _dirname = path.resolve();
app.post("/contact", async (req, res) => {
  console.log(req.body);
  try {
    const { name, email, phone, business, services, location, description } =
      req.body;
    const client = new clientModel({
      name,
      email,
      phone,
      business,
      services,
      location,
      description,
    });
    await client.save();
    res.status(201).send({ message: "Client data saved successfully!" });
  } catch (error) {
    console.error("Failed to save client data:", error);
    res.status(500).send({ error: "Failed to save client data" });
  }
});

mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

// getting the frontend files
app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", (_, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
