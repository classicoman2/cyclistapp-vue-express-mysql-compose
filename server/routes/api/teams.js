const express = require("express");
const router = express();
const mongodb = require("mongodb");
const mongoose = require("mongoose");

const fs = require("fs");
const teamModel = require("../../models/teamModel");

/**
 * Get All
 */
router.get("/", async (req, res) => {
  const teams = await teamModel.find({});
  try {
    res.send(teams);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
