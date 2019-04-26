const express = require("express");
const db = require("../helpers/projectModel");
const router = express.Router();

// ===================== PROJECTS ENDPOINTS =====================

// this only runs if the url has /api/projects in it

// get all projects
router.get("/", (req, res) => {
  db.get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json({ err: "Could not get projects" });
    });
});

// get project by ID
router.get("/:id", async (req, res) => {
  try {
    const project = await db.get(req.params.id);

    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: "Project not found" });
    }
  } catch (error) {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: "Error retrieving the project"
    });
  }
});

// add new project
router.post("/", async (req, res) => {
  try {
    const project = await db.insert(req.body);
    res.status(201).json(project);
  } catch (error) {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: "Error adding the project"
    });
  }
});

// update project
router.put("/:id", async (req, res) => {
  try {
    const project = await db.update(req.params.id, req.body);
    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: "The project could not be found" });
    }
  } catch (error) {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: "Error updating the project"
    });
  }
});

module.exports = router;
