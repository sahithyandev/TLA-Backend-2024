/**
 * @swagger
 * tags:
 *   name: Brammams
 *   description: API endpoints for managing Brammams
 */

/**
 * @swagger
 * /brammams:
 *   get:
 *     summary: Get all Brammams
 *     description: Retrieve a list of all Brammams from the database
 *     tags: [Brammams]
 *     responses:
 *       200:
 *         description: A list of Brammams
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /brammams:
 *   post:
 *     summary: Create a new Brammam
 *     description: Create a new Brammam in the database
 *     tags: [Brammams]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Brammam'
 *     responses:
 *       201:
 *         description: Brammam created
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /brammams/{brammamId}:
 *   get:
 *     summary: Get a Brammam by ID
 *     description: Retrieve a Brammam from the database by its ID
 *     tags: [Brammams]
 *     parameters:
 *       - in: path
 *         name: brammamId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: The ID of the Brammam to retrieve
 *     responses:
 *       200:
 *         description: A Brammam
 *       404:
 *         description: Brammam not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /brammams/{brammamId}:
 *   patch:
 *     summary: Update a Brammam by ID
 *     description: Update a Brammam in the database by its ID
 *     tags: [Brammams]
 *     parameters:
 *       - in: path
 *         name: brammamId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: The ID of the Brammam to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Brammam'
 *     responses:
 *       200:
 *         description: Brammam updated
 *       404:
 *         description: Brammam not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /brammams/{brammamId}:
 *   delete:
 *     summary: Delete a Brammam by ID
 *     description: Delete a Brammam from the database by its ID
 *     tags: [Brammams]
 *     parameters:
 *       - in: path
 *         name: brammamId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: The ID of the Brammam to delete
 *     responses:
 *       204:
 *         description: Brammam deleted
 *       404:
 *         description: Brammam not found
 *       500:
 *         description: Internal server error
 */
const express = require("express");
const router = express.Router();
const brammamController = require("../controllers/brammamController");

// GET all Brammams
router.get("/", brammamController.getAllBrammams);

// POST a new Brammam
router.post("/", brammamController.createBrammam);

// GET a specific Brammam by ID
router.get("/:brammamId", brammamController.getBrammamById);

// PATCH (update) a Brammam by ID
router.patch("/:brammamId", brammamController.updateBrammam);

// DELETE a Brammam by ID
router.delete("/:brammamId", brammamController.deleteBrammam);

module.exports = router;
