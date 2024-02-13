"use strict";
const { DataTypes } = require("sequelize");
const sequelize = require("../../db/db");

const Contact = sequelize.define("Contact", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: true, // message can be optional
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true, // phoneNumber can be optional
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Contact;
