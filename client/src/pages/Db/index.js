const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const clientModel = require("../../../server/models/client.model.js");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Route to handle form submission from Contact.js
app.post("/contact", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      business = "",
      services = "",
      location = "",
      description = "",
    } = req.body;
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
    res.status(500).send({ error: "Failed to save client data" });
  }
});

mongoose.connect(
  "mongodb+srv://adswithindia:u4kAJ%DDjHXn7ad@cluster0.ixb9m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Define the user schema (optional if it's already defined in client.model.js)
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  business: { type: String, default: "" },
  services: { type: String, default: "" },
  location: { type: String, default: "" },
  description: { type: String, default: "" },
});

const User = mongoose.model("User", userSchema);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
