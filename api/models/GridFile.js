const mongoose = require("mongoose");

const GridFileSchema = require("gridfile");
const GridFile = mongoose.model('GridFile', GridFileSchema);

module.exports.GridFile = GridFile;
module.exports.GridFileSchema = GridFileSchema;
