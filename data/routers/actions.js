const express = require("express");
const db = require("../helpers/actionModel");
const router = express.Router();

// ===================== ACTIONS ENDPOINTS =====================

// this only runs if the url has /api/actions in it
router.get("/", (req, res) => {
  db.get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json({ err: "Could not get actions" });
    });
});

module.exports = router;
