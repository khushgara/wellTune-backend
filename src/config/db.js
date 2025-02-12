// src/config/db.js
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Replace with your MySQL username
  password: "khushagra007", // Replace with your MySQL password
  database: "welltune",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

module.exports = db;
