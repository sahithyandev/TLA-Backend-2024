"use strict";
const { Sequelize } = require("sequelize");
const sql = require("../config/config").sql;

const sequelize = new Sequelize(sql.database, sql.user, sql.password, {
  host: sql.server,
  port: sql.port,
  dialect: sql.dialect,
  dialectOptions: {
    encrypt: sql.options.encrypt,
    enableArithAbort: sql.options.enableArithAbort,
  },
  pool: sql.pool,
});

module.exports = sequelize;
