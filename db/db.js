// "use strict";
// const { Sequelize } = require("sequelize");
// const sql = require("../config/config").sql;

// const sequelize = new Sequelize(sql.database, sql.user, sql.password, {
//   host: sql.server,
//   port: sql.port,
//   dialect: sql.dialect,
//   dialectOptions: {
//     encrypt: sql.options.encrypt,
//     enableArithAbort: sql.options.enableArithAbort,
//   },
//   pool: sql.pool,
// });

// module.exports = sequelize;

"use strict";
const mongoose = require("mongoose");
const { mongodbUri } = require("../config/config");

mongoose.connect(mongodbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = mongoose;
