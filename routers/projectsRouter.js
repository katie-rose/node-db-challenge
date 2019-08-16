const router = require("express").Router();

const db = require("../data/models/projectsModel");

router.get("/", async (req, res) => {
  res.status(200).json({ message: "It's working. IT'S WORKING" });
});

router.get("/list", async (req, res) => {
  try {
    const projects = await db.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;

module.exports = router;
