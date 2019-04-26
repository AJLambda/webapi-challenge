const express = require("express");
const db = require("../helpers/projectModel");
const router = express.Router();

// ===================== ACTIONS ENDPOINTS =====================

// this only runs if the url has /api/actions in it
router.get("/", (req, res) => {
  db.get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json({ err: "Could not get projects" });
    });
});

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
module.exports = router;
