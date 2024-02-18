/**
 * @swagger
 * tags:
 *   name: Contacts
 *   description: Operations related to contacts
 * /contacts:
 *   get:
 *     summary: Get all contacts
 *     description: Retrieve a list of all contacts from the database
 *     tags:
 *       - Contacts
 *     responses:
 *       200:
 *         description: A list of contacts
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
 *     summary: Create a new contact
 *     description: Create a new contact in the database
 *     tags:
 *       - Contacts
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contact'
 *     responses:
 *       201:
 *         description: Contact created
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
 * /contacts/{contactId}:
 *   get:
 *     summary: Get a contact by ID
 *     description: Retrieve a contact from the database by its ID
 *     tags:
 *       - Contacts
 *     parameters:
 *       - in: path
 *         name: contactId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: The ID of the contact to retrieve
 *     responses:
 *       200:
 *         description: A contact
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
 *     summary: Update a contact by ID
 *     description: Update a contact in the database by its ID
 *     tags:
 *       - Contacts
 *     parameters:
 *       - in: path
 *         name: contactId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: The ID of the contact to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contact'
 *     responses:
 *       200:
 *         description: Contact updated
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 *   delete:
 *     summary: Delete a contact by ID
 *     description: Delete a contact from the database by its ID
 *     tags:
 *       - Contacts
 *     parameters:
 *       - in: path
 *         name: contactId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: The ID of the contact to delete
 *     responses:
 *       204:
 *         description: Contact deleted
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */

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
