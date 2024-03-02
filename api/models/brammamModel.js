"use strict";
/**
 * @swagger
 * components:
 *   schemas:
 *     Brammam:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         category:
 *           type: string
 *         heading1:
 *           type: string
 *         heading2:
 *           type: string
 *         heading3:
 *           type: string
 *         deadline:
 *           type: string
 *         qRlink:
 *           type: string
 *         priceK1:
 *           type: string
 *         priceS2:
 *           type: string
 */

// const { DataTypes } = require("sequelize");
// const sequelize = require("../../db/db");

// const Brammam = sequelize.define("Brammam", {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   category: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   heading1: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   heading2: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   heading3: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   deadline: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   qRlink: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   priceK1: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   priceS2: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });

// module.exports = Brammam;
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
