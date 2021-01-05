const express = require("express");
const router = express();
const mongodb = require("mongodb");
const mongoose = require("mongoose");

const fs = require("fs");

// Model creat a /models/cyclist.js  -- xtoni
const cyclistModel = require("../../models/cyclistModel");

/**
 * Get All
 */
router.get("/", async (req, res) => {
  const cyclists = await cyclistModel.find({});
  try {
    res.send(cyclists);
  } catch (err) {
    res.status(500).send(err);
  }
});

/**
 * Get by Name
 */
router.get("/:name", async (req, res) => {
  const cyclist = await cyclistModel.findByName(req.params.name);
  try {
    res.send(cyclist);
  } catch (err) {
    res.status(500).send(err);
  }
});

/**
 * Add Post
 */
router.post("/add", async (req, res) => {
  const cyclist = new cyclistModel(req.body);

  try {
    await cyclist.save();
    res.send(cyclist);
  } catch (err) {
    res.status(500).send(err);
  }
});

/**
 * Delete Post
 */
router.delete("/delete/:id", async (req, res) => {
  try {
    const cyclist = await cyclistModel.findByIdAndDelete(req.params.id);

    if (!cyclist) res.status(404).send("No ha trobat aquest item");
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

/**
 * Load all from json files
 */
router.post("/loadall", async (req, res) => {
  // Llegir fitxers de teams i cyclists i carregar-los dins la BDD
  const testFolder = "loadData/data/json/";

  fs.readdirSync(testFolder).forEach((file) => {
    console.log(file);

    let rawdata = fs.readFileSync(testFolder + file);
    let teamsData = JSON.parse(rawdata);
    //  console.log(teamsData[0].ciclistes[0]);

    //xtoni Crea 1 ciclista per cada equip

    //adapta dades a Schema
    const ciclista = teamsData[0].ciclistes[0];

    if (ciclista.altura === undefined) ciclista.altura = -1;
    else {
      ciclista.altura = ciclista.altura.trim();
      ciclista.altura = Number(
        ciclista.altura.slice(0, ciclista.altura.indexOf(" ")).trim()
      );
    }

    if (ciclista.pes === undefined) ciclista.pes = -1;
    else {
      ciclista.pes = ciclista.pes.trim();
      ciclista.pes = Number(
        ciclista.pes.slice(0, ciclista.pes.indexOf(" ")).trim()
      );
    }


    console.log(ciclista);

    try {
      let cyclist = new cyclistModel(ciclista);
      cyclist.save();
    } catch (err) {
      res.status(500).send(err);
    }
  });

  res.send("All the data has been loaded");
});

module.exports = router;
