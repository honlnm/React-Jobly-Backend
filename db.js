// "use strict";
// /** Database setup for jobly. */
// const { Client } = require("pg");
// const { getDatabaseUri } = require("./config");

const { Client } = require("pg");

let DB_URI;

if (process.env.NODE_ENV === "test") {
  DB_URI = "postgresql:///jobly_test"
} else {
  DB_URI = "postgres://postgres.hvtnwjatcjhvwbigyvob:y2uCud2n8pcchLHZ@aws-0-us-west-1.pooler.supabase.com:5432/postgres"
};

let db = new Client({
  connectionString: DB_URI
});

db.connect();

module.exports = db;


