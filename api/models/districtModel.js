"use strict";
const mongoose = require("mongoose");

const districtSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    coordinator: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: Number,
      required: true,
    },
    province: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      validate: {
        validator: function (v) {
          return /^(ftp|http|https):\/\/[^ "]+$/.test(v);
        },
        message: "Invalid URL format",
      },
    },
  },
  {
    timestamps: true,
  }
);

const District = mongoose.model("District", districtSchema);

module.exports = District;
