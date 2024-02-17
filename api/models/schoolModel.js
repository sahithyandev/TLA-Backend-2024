"use strict";
/**
 * @swagger
 * components:
 *   schemas:
 *     School:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The unique identifier for the school.
 *           example: 1
 *         name:
 *           type: string
 *           description: The name of the school.
 *           example: 'School A'
 *         rank:
 *           type: string
 *           description: The rank of the school.
 *           example: 'Top Ranked'
 *         incharge:
 *           type: string
 *           description: The incharge person for the school.
 *           example: 'John Doe'
 *         contactNumber:
 *           type: integer
 *           description: The contact number for the school.
 *           example: 1234567890
 *         districtId:
 *           type: integer
 *           description: The ID of the district associated with the school.
 *           example: 1
 *         schoolImage:
 *           type: string
 *           description: The URL of the image associated with the school.
 *           example: 'https://example.com/school-image.jpg'
 *         createdAt:
 *           type: string
 *           description: The date the school was created.
 *           example: '2024-02-12'
 *         updatedAt:
 *           type: string
 *           description: The date the school was updated.
 *           example: '2024-02-12'
 */
const { DataTypes } = require("sequelize");
const sequelize = require("../../db/db");
const District = require("./districtModel");

const School = sequelize.define("School", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rank: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  incharge: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contactNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isNumeric: true,
    },
  },
  districtId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: District,
      key: "id",
    },
  },
  schoolImage: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isUrl: true,
    },
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = School;
