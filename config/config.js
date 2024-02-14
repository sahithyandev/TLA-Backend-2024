"use strict";

const dotenv = require("dotenv");
const assert = require("assert");

dotenv.config();

const {
  PORT,
  HOST_URL,
  HOST,
  SQL_DB,
  SQL_SERVER,
  DIALECT,
  SQL_PORT,
  SQL_USER,
  SQL_PASSWORD,
} = process.env;

const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

assert(PORT, "PORT is required");
assert(HOST_URL, "HOST_URL is required");
assert(HOST, "HOST is required");
assert(SQL_DB, "SQL_DB is required");
assert(SQL_SERVER, "SQL_SERVER is required");

module.exports = {
  port: PORT,
  url: HOST_URL,
  host: HOST,
  sql: {
    user: SQL_USER,
    password: SQL_PASSWORD,
    database: SQL_DB,
    server: SQL_SERVER,
    port: SQL_PORT, // Default port
    dialect: DIALECT,
    options: {
      encrypt: sqlEncrypt,
      enableArithAbort: true,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
