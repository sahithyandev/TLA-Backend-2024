"use strict";
const express = require("express");
const cors = require("cors");
const contactRoutes = require("./api/routes/contactRoutes");
const aramiyamRoutes = require("./api/routes/aramiyamRoutes");
const districtRoutes = require("./api/routes/districtRoutes");
const schoolRoutes = require("./api/routes/schoolRoutes");
const brammamRoutes = require("./api/routes/brammamRoutes");

const app = express();

// console.log(swaggerSpec);
// Enable CORS for all origins during development
app.use(cors());

app.get;
// Parse JSON requests
app.use(express.json());

// Parse URL-encoded requests
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/contacts", contactRoutes);
app.use("/aramiyams", aramiyamRoutes);
app.use("/districts", districtRoutes);
app.use("/schools", schoolRoutes);
app.use("/brammams", brammamRoutes);

module.exports = app;
