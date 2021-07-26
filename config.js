"use strict";

/** Shared config for application; can be required many places. */

require("dotenv").config();
require("colors");

const CLIENT_SECRET = process.env.CLIENT_SECRET || "secret-dev";

const PORT = +process.env.PORT || 3001;

// Use dev database, testing database, or via env var, production database
function getDatabaseUri() {
  return (process.env.NODE_ENV === "test")
      ? "flighter_test"
      : process.env.DATABASE_URL || "flighter";
}

// Speed up bcrypt during tests, since the algorithm safety isn't being tested
//
// WJB: Evaluate in 2021 if this should be increased to 13 for non-test use
const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;

console.log("BennyBuild Config:".green);
console.log("SECRET_KEY:".yellow, CLIENT_SECRET);
console.log("PORT:".yellow, PORT.toString());
console.log("BCRYPT_WORK_FACTOR".yellow, BCRYPT_WORK_FACTOR);
console.log("Database:".yellow, getDatabaseUri());
console.log("---");

module.exports = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  PORT,
  BCRYPT_WORK_FACTOR,
  getDatabaseUri,
};
