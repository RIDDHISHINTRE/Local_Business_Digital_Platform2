const Service = require("../models/Service");

// CREATE SERVICE (ADMIN)
exports.createService = async (req, res) => {
  try {
    const {
      title,
      shortDescription,
      longDescription,
      price,
      duration,
      features,
      category,
      isActive,
    } = req.body;

    if (
      !title ||
      !shortDescription ||
      !longDescription ||
      !price ||
      !duration ||
      !features
    ) {
      return res
        .status(400)
        .json({ message: "All required fields must be filled" });
    }

    const service = await Service.create({
      title,
      shortDescription,
      longDescription,
      price,
      duration,
      features,
      category,
      isActive: isActive !== undefined ? isActive : true,
    });

    res.status(201).json({
      message: "Service created successfully",
      service,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ALL SERVICES (ADMIN → show all)
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find(); // ✅ show all

    res.json(services);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET SINGLE SERVICE
exports.getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.json(service);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE SERVICE
exports.updateService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.json({
      message: "Service updated successfully",
      service,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE SERVICE
exports.deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.json({ message: "Service deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};