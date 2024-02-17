/**
 * @swagger
 * tags:
 *   name: Aramiyams
 *   description: Endpoints for managing Aramiyams
 */

/**
 * @swagger
 * /aramiyams:
 *   get:
 *     summary: Get all Aramiyams
 *     tags: [Aramiyams]
 *     responses:
 *       200:
 *         description: A list of Aramiyams
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Aramiyam'
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /aramiyams:
 *   post:
 *     summary: Create a new Aramiyam
 *     tags: [Aramiyams]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Aramiyam'
 *     responses:
 *       201:
 *         description: Aramiyam created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Aramiyam'
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /aramiyams/{aramiyamId}:
 *   patch:
 *     summary: Update an Aramiyam by ID
 *     tags: [Aramiyams]
 *     parameters:
 *       - in: path
 *         name: aramiyamId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: The ID of the Aramiyam to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Aramiyam'
 *     responses:
 *       200:
 *         description: Aramiyam updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Aramiyam'
 *       404:
 *         description: Aramiyam not found
 *       500:
 *         description: Internal Server Error
 */

const express = require("express");
const router = express.Router();
const aramiyamController = require("../controllers/aramiyamController");

router.get("/", aramiyamController.getAllAramiyams);
router.post("/", aramiyamController.createAramiyam);
router.patch("/:aramiyamId", aramiyamController.updateAramiyam);

module.exports = router;
