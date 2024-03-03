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
