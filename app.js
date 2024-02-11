const express = require("express");
const app = express();
const contactRouts = require("./api/routes/contact");
app.use("/contacts", contactRouts);
module.exports = app;
