"use strict";
const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rank: {
    type: String,
    required: true,
  },
  incharge: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  districtId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "District", // Reference to the District model
    required: true,
  },
  schoolImage: {
    type: String,
    validate: {
      validator: (value) => {
        // Custom URL validation
        if (!value) return true; // Allow null values
        return /^(ftp|http|https):\/\/[^ "]+$/.test(value);
      },
      message: "Invalid URL format",
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const School = mongoose.model("School", schoolSchema);

module.exports = School;
