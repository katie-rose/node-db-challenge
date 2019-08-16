const router = require("express").Router();

const db = require("../data/models/resourcesModel");

router.get("/", async (req, res) => {
  res.status(200).json({ message: "It's working. IT'S WORKING" });
});

router.get("/list", async (req, res) => {
  try {
    const resources = await db.find();
    res.status(200).json(resources);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.post("/", async (req, res) => {
  const resourceData = req.body;

  try {
    const project = await db.add(projectData);
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ message: "Failed to create new resource" });
  }
});

module.exports = router;
