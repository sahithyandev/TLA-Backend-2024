"use strict";
const mongoose = require("mongoose");
const { GridFileSchema } = require("./GridFile");

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	passwordHash: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	phoneNo: {
		type: String
	},
	profileImageUrl: {
		type: GridFileSchema
	},
	loggedInCookie: {
		type: String
	}
});

const User = mongoose.model("User", userSchema);

module.exports = User;
