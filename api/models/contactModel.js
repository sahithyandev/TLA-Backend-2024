"use strict";
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (value) => /\S+@\S+\.\S+/.test(value),
      message: "Invalid email address",
    },
  },
  message: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
