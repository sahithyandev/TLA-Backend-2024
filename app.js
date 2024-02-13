"use strict";
const express = require("express");
const cors = require("cors");
const contactRoutes = require("./api/routes/contact");

const app = express();

// Enable CORS for all origins during development
app.use(cors());

// Parse JSON requests
app.use(express.json());

// Parse URL-encoded requests
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/contacts", contactRoutes);

module.exports = app;
