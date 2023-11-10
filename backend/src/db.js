const sqlite3 = require("sqlite3");

const ORDER_TABLE_COLUMNS = [
  "id TEXT PRIMARY KEY",
  "billing_first_name TEXT NOT NULL",
  "billing_last_name TEXT NOT NULL",
  "billing_phone NUMBER NOT NULL",
  "billing_email TEXT NOT NULL",
  "billing_same_as_shipping INTEGER NOT NULL",
  "shipping_first_name TEXT",
  "shipping_last_name TEXT",
  "shipping_phone NUMBER",
  "shipping_email TEXT",
  "order_total NUMBER",
];

const db = new sqlite3.Database("./database.db");

db.serialize(() => {
  const statement = `CREATE TABLE IF NOT EXISTS orders (${ORDER_TABLE_COLUMNS.join(
    ", "
  )})`;

  db.run(statement);
});

module.exports = db;
