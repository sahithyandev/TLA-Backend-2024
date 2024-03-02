"use strict";

/**
 * @swagger
 * components:
 *   schemas:
 *     Aramiyam:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         heading:
 *           type: string
 *         description:
 *           type: string
 *         category:
 *           type: string
 *         date:
 *           type: string
 *         time:
 *           type: string
 *         speecher:
 *           type: string
 *         qualification:
 *           type: string
 *         speecherDetails:
 *           type: string
 */
// const { DataTypes } = require("sequelize");
// const sequelize = require("../../db/db");

// const Aramiyam = sequelize.define("Aramiyam", {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   heading: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   description: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   category: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   date: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   time: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   speecher: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   qualification: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   speecherDetails: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });

// module.exports = Aramiyam;

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
