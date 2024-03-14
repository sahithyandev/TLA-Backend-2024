"use strict";
const mongoose = require("mongoose");

const GridFile = mongoose.model('GridFile', require("gridfile"));

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
		type: [GridFile],
	},
});

const SharedMemory = mongoose.model("SharedMemory", sharedMemorySchema);

module.exports = SharedMemory;
