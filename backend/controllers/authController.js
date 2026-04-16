const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");

// 🔹 SIGNUP
exports.signup = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    if (!name || !email || !password || !phone) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // ✅ Check existing email
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // ✅ Check existing phone
    const existingPhone = await User.findOne({ phone });
    if (existingPhone) {
      return res.status(400).json({ message: "Phone already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const emailToken = crypto.randomBytes(32).toString("hex");

    await User.create({
      name,
      email,
      password: hashedPassword,
      phone,
      emailToken,
      role: "user", // ✅ default role
    });

    const verifyLink = `http://localhost:5173/verify-email/${emailToken}`;

    await sendEmail(
      email,
      "Verify Your Email",
      `
        <h2>Email Verification</h2>
        <p>Click below to verify your email:</p>
        <a href="${verifyLink}">Verify Email</a>
      `
    );

    return res.status(201).json({
      message: "Signup successful. Please verify your email.",
    });

  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error" });
  }
};


// 🔹 VERIFY EMAIL
exports.verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;

    console.log("TOKEN RECEIVED:", token);

    const user = await User.findOne({ emailToken: token });

    if (!user) {
      return res.status(400).json({
        message: "Invalid or expired link",
      });
    }

    if (user.isEmailVerified) {
      return res.json({
        message: "Email already verified",
      });
    }

    user.isEmailVerified = true;
    user.emailToken = null;

    await user.save();

    return res.json({
      message: "Email verified successfully",
    });

  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error" });
  }
};


// 🔹 LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (!user.isEmailVerified) {
      return res.status(403).json({
        message: "Please verify your email first",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role }, // ✅ include role in JWT
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    return res.json({
      message: "Login successful",
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role, 
      },
    });

  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error" });
  }
};