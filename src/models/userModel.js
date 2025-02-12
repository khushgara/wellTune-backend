// src/models/userModel.js
const db = require("../config/db");
const bcrypt = require("bcryptjs");

class User {
  static async findByEmail(email) {
    const [rows] = await db
      .promise()
      .query("SELECT * FROM users WHERE email = ?", [email]);
    return rows[0];
  }

  static async createUser(email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await db
      .promise()
      .query("INSERT INTO users (email, password) VALUES (?, ?)", [
        email,
        hashedPassword,
      ]);
    return result.insertId;
  }
}

module.exports = User;
