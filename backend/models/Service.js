const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    shortDescription: {
      type: String,
      required: true,
    },

    longDescription: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    duration: {
      type: String,
      required: true,
      enum: ["hourly", "daily", "weekly", "monthly", "one-time"],
    },

    features: {
      type: [String],
      required: true,
      validate: [(arr) => arr.length > 0, "At least one feature required"],
    },

    category: {
      type: String,
      default: "general",
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", serviceSchema);