const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  business: { type: String, required: false }, // Change required to false
  services: { type: String, required: false }, // Change required to false
  location: { type: String, required: false }, // Change required to false
  description: { type: String, required: false } // Change required to false
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
