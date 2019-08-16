const router = require("express").Router();

const db = require("../data/models/tasksModel");

router.get("/", async (req, res) => {
  res.status(200).json({ message: "It's working. IT'S WORKING" });
});

router.get("/list", async (req, res) => {
  try {
    const tasks = await db.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.post("/", async (req, res) => {
  const taskData = req.body;

  try {
    const task = await db.add(taskData);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: "Failed to create new project" });
  }
});

module.exports = router;
