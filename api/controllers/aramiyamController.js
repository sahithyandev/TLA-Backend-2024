// const Aramiyam = require("../models/aramiyamModel");

// const aramiyamController = {
//   getAllAramiyams: async (req, res, next) => {
//     try {
//       const aramiyams = await Aramiyam.findAll();
//       res.status(200).json(aramiyams);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   },

//   createAramiyam: async (req, res, next) => {
//     try {
//       const newAramiyam = await Aramiyam.create(req.body);
//       res.status(201).json(newAramiyam);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   },

//   updateAramiyam: async (req, res, next) => {
//     try {
//       const id = req.params.aramiyamId;
//       const aramiyam = await Aramiyam.findByPk(id);
//       if (aramiyam) {
//         const updatedAramiyam = await aramiyam.update(req.body);
//         res.status(200).json(updatedAramiyam);
//       } else {
//         res.status(404).json({ message: "Aramiyam not found" });
//       }
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   },
// };

// module.exports = aramiyamController;

const Aramiyam = require("../models/aramiyamModel");

const aramiyamController = {
  getAllAramiyams: async (req, res, next) => {
    try {
      const aramiyams = await Aramiyam.find();
      res.status(200).json(aramiyams);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createAramiyam: async (req, res, next) => {
    try {
      const newAramiyam = await Aramiyam.create(req.body);
      res.status(201).json(newAramiyam);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateAramiyam: async (req, res, next) => {
    try {
      const id = req.params.aramiyamId;
      const aramiyam = await Aramiyam.findById(id);
      if (aramiyam) {
        aramiyam.set(req.body); // Update document properties
        const updatedAramiyam = await aramiyam.save(); // Save the changes
        res.status(200).json(updatedAramiyam);
      } else {
        res.status(404).json({ message: "Aramiyam not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = aramiyamController;
