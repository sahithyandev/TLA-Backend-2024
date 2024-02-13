// routes/brammam.routes.js
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
