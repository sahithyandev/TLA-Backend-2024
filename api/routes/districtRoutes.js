/**
 * @swagger
 * tags:
 *   name: Districts
 *   description: Endpoints for managing Districts
 */

/**
 * @swagger
 * /districts:
 *   get:
 *     summary: Get all Districts
 *     tags: [Districts]
 *     responses:
 *       200:
 *         description: A list of Districts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/District'
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /districts:
 *   post:
 *     summary: Create a new District
 *     tags: [Districts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/District'
 *     responses:
 *       201:
 *         description: District created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/District'
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /districts/{districtId}:
 *   get:
 *     summary: Get a District by ID
 *     tags: [Districts]
 *     parameters:
 *       - in: path
 *         name: districtId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: The ID of the District to retrieve
 *     responses:
 *       200:
 *         description: A District
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/District'
 *       404:
 *         description: District not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /districts/{districtId}:
 *   put:
 *     summary: Update a District by ID
 *     tags: [Districts]
 *     parameters:
 *       - in: path
 *         name: districtId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: The ID of the District to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/District'
 *     responses:
 *       200:
 *         description: District updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/District'
 *       404:
 *         description: District not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /districts/{districtId}:
 *   delete:
 *     summary: Delete a District by ID
 *     tags: [Districts]
 *     parameters:
 *       - in: path
 *         name: districtId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: The ID of the District to delete
 *     responses:
 *       204:
 *         description: District deleted successfully
 *       404:
 *         description: District not found
 *       500:
 *         description: Internal Server Error
 */

const express = require("express");
const router = express.Router();
const districtController = require("../controllers/districtController");

router.get("/", districtController.getAllDistricts);
router.post("/", districtController.createDistrict);
router.get("/:districtId", districtController.getDistrictById);
router.put("/:districtId", districtController.updateDistrict);
router.delete("/:districtId", districtController.deleteDistrict);

module.exports = router;
