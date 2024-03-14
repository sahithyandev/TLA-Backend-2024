"use strict";
const mongoose = require("mongoose");
const { GridFileSchema } = require("./GridFile");

const sharedMemorySchema = new mongoose.Schema({
	sharedBy: {
		type: String,
		required: true,
	},
	heading: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true,
	},
	images: {
		type: [GridFileSchema],
	},
});

const SharedMemory = mongoose.model("SharedMemory", sharedMemorySchema);

module.exports = SharedMemory;
