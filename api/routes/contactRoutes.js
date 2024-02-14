const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

// GET all contacts
router.get("/", contactController.getAllContacts);

// POST a new contact
router.post("/", contactController.createContact);

// GET a specific contact by ID
router.get("/:contactId", contactController.getContactById);

// PATCH (update) a contact by ID
router.patch("/:contactId", contactController.updateContact);

// DELETE a contact by ID
router.delete("/:contactId", contactController.deleteContact);

module.exports = router;
