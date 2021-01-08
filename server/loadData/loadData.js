/*
  Node.js script per carregar a base de dades MongoDB les dades dels equips i dels ciclistes
  */

//Carrega variables entorn de fitxer .env

const fs = require("fs");
const mongoose = require("mongoose");
require("dotenv").config();

// MONGO_HOST valdra 'mongo'  si empram docker-compose o network,  127.0.0.1 altrament
// https://stackoverflow.com/questions/44508183/docker-compose-mongoose
const url = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.MONGO_HOST}:27017`;

//Si no existeix la base de dades, crea-la
var MongoClient = require("mongodb").MongoClient;
MongoClient.connect(url, function (err, db) {
  try {
    if (err) throw err;
    console.log("Database cyclists_db created!");
    db.close();
  } catch (err) {
    console.log(err);
  }
});

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});



// Models de dades
const cyclistModel = require("../models/cyclistModel");
const teamModel = require("../models/teamModel");

// Llegir tots els fitxers
// Carregar dades de teams i cyclists a la BDD

const testFolder = "loadData/data/json/";

fs.readdirSync(testFolder).forEach((file) => {
  let rawdata = fs.readFileSync(testFolder + file);
  let teamsData = JSON.parse(rawdata);
  //  console.log(teamsData[0].ciclistes[0]);

  /* TEAMS - Guarda noms d'equips */
  teamsData.forEach(t => {
 
    try {
      let teammodel = new teamModel({name: t.team});
      teammodel.save();
    } catch (err) {
      console.log(err);
    }

  }); 






  //xtoni Crea 1 ciclista per cada equip

  //adapta dades a Schema
  const ciclista = teamsData[0].ciclistes[0];
  console.log(ciclista);
  ciclista.pes = 50; //ciclista.pes.slice(0, ciclista.pes.indexOf(" ")).trim();
  ciclista.altura = 60; /*ciclista.altura === undefined ? -1 : ciclista.altura.slice(0, ciclista.pes.indexOf(" ")).trim();*/

  try {
    let cyclistmodel = new cyclistModel(teamsData[0].ciclistes[0]);
    cyclistmodel.save();
  } catch (err) {
    console.log(err);
  }
});
