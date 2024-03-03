"use strict";
const mongoose = require("mongoose");

const brammamSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  heading1: {
    type: String,
    required: true,
  },
  heading2: {
    type: String,
    required: true,
  },
  heading3: {
    type: String,
    required: true,
  },
  deadline: {
    type: String,
    required: true,
  },
  qRlink: {
    type: String,
  },
  priceK1: {
    type: String,
    required: true,
  },
  priceS2: {
    type: String,
    required: true,
  },
});

const Brammam = mongoose.model("Brammam", brammamSchema);

module.exports = Brammam;
