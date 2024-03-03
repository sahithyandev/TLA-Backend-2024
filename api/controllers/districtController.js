const District = require("../models/districtModel");

const districtController = {
  getAllDistricts: async (req, res, next) => {
    try {
      const districts = await District.find();
      res.status(200).json(districts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createDistrict: async (req, res, next) => {
    try {
      const newDistrict = await District.create(req.body);
      res.status(201).json(newDistrict);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getDistrictById: async (req, res, next) => {
    try {
      const id = req.params.districtId;
      const district = await District.findById(id);
      if (district) {
        res.status(200).json(district);
      } else {
        res.status(404).json({ message: "District not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateDistrict: async (req, res, next) => {
    try {
      const id = req.params.districtId;
      const district = await District.findById(id);
      if (district) {
        district.set(req.body); // Update document properties
        const updatedDistrict = await district.save(); // Save the changes
        res.status(200).json(updatedDistrict);
      } else {
        res.status(404).json({ message: "District not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteDistrict: async (req, res, next) => {
    try {
      const id = req.params.districtId;
      const district = await District.findById(id);
      if (district) {
        await district.deleteOne();
        res.status(204).end();
      } else {
        res.status(404).json({ message: "District not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = districtController;
