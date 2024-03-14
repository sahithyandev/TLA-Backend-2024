const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// GET all users
router.get("/", userController.getAllUsers);

// POST a new user
router.post("/", userController.createUser);

// GET a specific user by ID
router.get("/:userId", userController.getUserById);

// POST login
router.post("/login", userController.login)

module.exports = router;
