const express = require("express");
const router = express.Router();
const aramiyamController = require("../controllers/aramiyamController");

// GET all Aramiyams
router.get("/", aramiyamController.getAllAramiyams);

// POST a new Aramiyam
router.post("/", aramiyamController.createAramiyam);

// PATCH (update) an Aramiyam by ID
router.patch("/:aramiyamId", aramiyamController.updateAramiyam);

module.exports = router;
