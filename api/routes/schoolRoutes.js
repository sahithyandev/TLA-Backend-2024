/**
 * @swagger
 * tags:
 *   name: Schools
 *   description: Operations related to schools
 * /schools:
 *   get:
 *     summary: Get all schools
 *     description: Retrieve a list of all schools from the database
 *     tags:
 *       - Schools
 *     responses:
 *       200:
 *         description: A list of schools
 *       500:
 *         description: Internal server error
 *       404:
 *         description: Not found
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *   post:
 *     summary: Create a new school
 *     description: Create a new school in the database
 *     tags:
 *       - Schools
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/School'
 *     responses:
 *       201:
 *         description: School created
 *       500:
 *         description: Internal server error
 *       404:
 *         description: Not found
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 * /schools/{schoolId}:
 *   get:
 *     summary: Get a school by ID
 *     description: Retrieve a school from the database by its ID
 *     tags:
 *       - Schools
 *     parameters:
 *       - in: path
 *         name: schoolId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: The ID of the school to retrieve
 *     responses:
 *       200:
 *         description: A school
 *       500:
 *         description: Internal server error
 *       404:
 *         description: Not found
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *   patch:
 *     summary: Update a school by ID
 *     description: Update a school in the database by its ID
 *     tags:
 *       - Schools
 *     parameters:
 *       - in: path
 *         name: schoolId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: The ID of the school to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/School'
 *     responses:
 *       200:
 *         description: School updated
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 *   delete:
 *     summary: Delete a school by ID
 *     description: Delete a school from the database by its ID
 *     tags:
 *       - Schools
 *     parameters:
 *       - in: path
 *         name: schoolId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: The ID of the school to delete
 *     responses:
 *       204:
 *         description: School deleted
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */

const express = require("express");
const router = express.Router();
const schoolController = require("../controllers/schoolController");

// GET all schools
router.get("/", schoolController.getAllSchools);

// POST a new school
router.post("/", schoolController.createSchool);

// GET a specific school by ID
router.get("/:schoolId", schoolController.getSchoolById);

// PATCH (update) a school by ID
router.patch("/:schoolId", schoolController.updateSchool);

// DELETE a school by ID
router.delete("/:schoolId", schoolController.deleteSchool);

module.exports = router;
