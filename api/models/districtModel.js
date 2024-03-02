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

const mongoose = require("mongoose");

const districtSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    coordinator: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: Number,
      required: true,
    },
    province: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      validate: {
        validator: function (v) {
          return /^(ftp|http|https):\/\/[^ "]+$/.test(v);
        },
        message: "Invalid URL format",
      },
    },
  },
  {
    timestamps: true,
  }
);

const District = mongoose.model("District", districtSchema);

module.exports = District;
