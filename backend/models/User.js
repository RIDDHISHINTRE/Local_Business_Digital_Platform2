// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  phone: { type: String, unique: true },

  isEmailVerified: { type: Boolean, default: false },

  emailToken: String, // ✅ ADD THIS

  role: { type: String, default: "user" },

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);

