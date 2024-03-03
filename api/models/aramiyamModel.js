"use strict";
const mongoose = require("mongoose");

const aramiyamSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  speaker: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  speakerDetails: {
    type: String,
    required: true,
  },
});

const Aramiyam = mongoose.model("Aramiyam", aramiyamSchema);

module.exports = Aramiyam;
