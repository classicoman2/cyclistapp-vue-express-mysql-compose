/*
  Node.js script per carregar a base de dades MongoDB les dades dels equips i dels ciclistes
  */

//Carrega variables entorn de fitxer .env

const fs = require("fs");

var dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

// Connectar a Mongo
var enContenidor = true;
var host = enContenidor ? "mongo" : "127.0.0.1";
mongoose.connect(
  `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@localhost:27017`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// Model creat a /models/cyclist.js
const cyclistModel = require("../models/cyclistModel");

// Llegir fitxers de teams i cyclists i carregar-los dins la BDD

const testFolder = "./data/json/";

fs.readdirSync(testFolder).forEach((file) => {
  console.log(file);

  let rawdata = fs.readFileSync(testFolder + file);
  let teamsData = JSON.parse(rawdata);
  //  console.log(teamsData[0].ciclistes[0]);

  //xtoni Crea 1 ciclista per cada equip

  //adapta dades a Schema
  const ciclista = teamsData[0].ciclistes[0];
  console.log(ciclista)
  ciclista.pes = 50 //ciclista.pes.slice(0, ciclista.pes.indexOf(" ")).trim();
  ciclista.altura = 60 /*ciclista.altura === undefined ? -1 : ciclista.altura.slice(0, ciclista.pes.indexOf(" ")).trim();*/

  try {
    let cyclistmodel = new cyclistModel(teamsData[0].ciclistes[0]);
    cyclistmodel.save();
  } catch (err) {
    console.log(err);
  }
});
