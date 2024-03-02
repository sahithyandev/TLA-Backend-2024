const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Your API Documentation",
    version: "1.0.0",
    description: "This is the API documentation for your Node.js application.",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Development server",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./api/routes/*.js", "./api/models/*.js", "./api/controllers/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = {
  swaggerSpec,
  swaggerUi,
};
