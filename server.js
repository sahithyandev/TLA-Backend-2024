"use strict";
const http = require("http");
const app = require("./app");
const sequelize = require("./db/db");

const port = process.env.PORT || 3000;
const server = http.createServer(app);

// Use the server's 'listening' event to ensure the SQL Server connection is established before starting the server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// Ensure Sequelize models are synchronized with the database
sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((error) => {
    console.error("Error synchronizing database:", error);
  });

// Handle server errors
server.on("error", (err) => {
  console.error("Server error:", err);
});
