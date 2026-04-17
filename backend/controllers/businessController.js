const Business = require("../models/Business");


// ==============================
// CREATE BUSINESS (USER)
// ==============================
exports.createBusiness = async (req, res) => {
  try {
    const {
      serviceId,
      businessName,
      category,
      description,
      address,
      city,
      whatsappNumber,
    } = req.body;

    if (
      !serviceId ||
      !businessName ||
      !category ||
      !description ||
      !address ||
      !city ||
      !whatsappNumber
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const business = await Business.create({
      userId: req.user.id, // from JWT
      serviceId,
      businessName,
      category,
      description,
      address,
      city,
      whatsappNumber,
    });

    res.status(201).json({
      message: "Business submitted successfully",
      business,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// ==============================
// GET MY BUSINESS (USER)
// ==============================
exports.getMyBusiness = async (req, res) => {
  try {
    const businesses = await Business.find({ userId: req.user.id })
      .populate("serviceId", "title price duration");

    res.json(businesses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// ==============================
// GET ALL BUSINESSES (ADMIN)
// ==============================
exports.getAllBusinesses = async (req, res) => {
  try {
    const businesses = await Business.find()
      .populate("userId", "name email")
      .populate("serviceId", "title");

    res.json(businesses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// ==============================
// UPDATE STATUS (ADMIN)
// ==============================
exports.updateBusinessStatus = async (req, res) => {
  try {
    const { status, rejectionReason } = req.body;

    if (!["approved", "rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const business = await Business.findById(req.params.id);

    if (!business) {
      return res.status(404).json({ message: "Business not found" });
    }

    business.verificationStatus = status;

    if (status === "rejected") {
      business.rejectionReason = rejectionReason || "Not specified";
    } else {
      business.rejectionReason = "";
    }

    await business.save();

    res.json({
      message: `Business ${status} successfully`,
      business,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};