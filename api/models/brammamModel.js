// models/brammam.model.js
const { DataTypes } = require("sequelize");
const sequelize = require("../../db/db");

const Brammam = sequelize.define("Brammam", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  heading1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  heading2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  heading3: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  deadline: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  qRlink: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  priceK1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  priceS2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Brammam;
