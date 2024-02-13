const School = require("../models/schoolModel");

const schoolController = {
  getAllSchools: async (req, res, next) => {
    try {
      const schools = await School.findAll();
      res.status(200).json(schools);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createSchool: async (req, res, next) => {
    try {
      const newSchool = await School.create(req.body);
      res.status(201).json(newSchool);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getSchoolById: async (req, res, next) => {
    try {
      const id = req.params.schoolId;
      const school = await School.findByPk(id);
      if (school) {
        res.status(200).json(school);
      } else {
        res.status(404).json({ message: "School not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateSchool: async (req, res, next) => {
    try {
      const id = req.params.schoolId;
      const school = await School.findByPk(id);
      if (school) {
        const updatedSchool = await school.update(req.body);
        res.status(200).json(updatedSchool);
      } else {
        res.status(404).json({ message: "School not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteSchool: async (req, res, next) => {
    try {
      const id = req.params.schoolId;
      const school = await School.findByPk(id);
      if (school) {
        await school.destroy();
        res.status(204).end();
      } else {
        res.status(404).json({ message: "School not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = schoolController;
