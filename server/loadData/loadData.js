/*
  Node.js script per carregar a base de dades MongoDB les dades dels equips i dels ciclistes
  */

//Carrega variables entorn de fitxer .env

const fs = require("fs");

var dotenv = require("dotenv");
dotenv.config();

//console.log(process.env);

// Connectar a Mongo

// Crear collection i crear database

// Llegir fitxers de teams i cyclists i carregar-los dins la BDD

const testFolder = "./data/json/";

fs.readdirSync(testFolder).forEach((file) => {
    console.log(file)

    let rawdata = fs.readFileSync(testFolder + file);
  let teamsData = JSON.parse(rawdata);
  console.log(teamsData[0].ciclistes[0]);
  
});
