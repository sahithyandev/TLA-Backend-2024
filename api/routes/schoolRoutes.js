// routes/school.routes.js
const express = require("express");
const router = express.Router();
const schoolController = require("../controllers/schoolController");

// GET all Schools
router.get("/", schoolController.getAllSchools);

// POST a new School
router.post("/", schoolController.createSchool);

// GET a specific School by ID
router.get("/:schoolId", schoolController.getSchoolById);

// PATCH (update) a School by ID
router.patch("/:schoolId", schoolController.updateSchool);

// DELETE a School by ID
router.delete("/:schoolId", schoolController.deleteSchool);

module.exports = router;
