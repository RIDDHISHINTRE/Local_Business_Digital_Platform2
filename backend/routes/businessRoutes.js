const express = require("express");
const router = express.Router();

const {
  createBusiness,
  getMyBusiness,
  getAllBusinesses,
  updateBusinessStatus,
} = require("../controllers/businessController");

const { protect } = require("../middleware/authMiddleware");
const { adminOnly } = require("../middleware/adminMiddleware");


// ==============================
// USER ROUTES
// ==============================

// Submit business
router.post("/", protect, createBusiness);

// Get logged-in user's business
router.get("/my", protect, getMyBusiness);


// ==============================
// ADMIN ROUTES
// ==============================

// Get all businesses
router.get("/", protect, adminOnly, getAllBusinesses);

// Approve / Reject
router.put("/:id", protect, adminOnly, updateBusinessStatus);


module.exports = router;