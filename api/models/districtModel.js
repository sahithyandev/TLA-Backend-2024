/**
 * @swagger
 * components:
 *   schemas:
 *     District:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The unique identifier for the district.
 *           example: 1
 *         name:
 *           type: string
 *           description: The name of the district.
 *           example: 'District A'
 *         status:
 *           type: string
 *           description: The status of the district.
 *           example: 'Active'
 *         date:
 *           type: string
 *           description: The date associated with the district.
 *           example: '2024-02-12'
 *         place:
 *           type: string
 *           description: The place associated with the district.
 *           example: 'City X'
 *         coordinator:
 *           type: string
 *           description: The coordinator of the district.
 *           example: 'John Doe'
 *         contactNumber:
 *           type: integer
 *           description: The contact number for the district.
 *           example: 1234567890
 *         province:
 *           type: string
 *           description: The province associated with the district.
 *           example: 'Province Y'
 *         imageURL:
 *           type: string
 *           description: The URL of the image associated with the district.
 *           example: 'https://example.com/district-image.jpg'
 *         createdAt:
 *           type: string
 *           description: The date the district was created.
 *           example: '2024-02-12'
 *         updatedAt:
 *           type: string
 *           description: The date the district was updated.
 *           example: '2024-02-12'
 *
 */

const { DataTypes } = require("sequelize");
const sequelize = require("../../db/db");

const District = sequelize.define("District", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  place: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  coordinator: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contactNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  province: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageURL: {
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

module.exports = District;
