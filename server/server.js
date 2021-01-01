const express = require("express");
const app = express();

//Carrega variables entorn de fitxer .env
require("dotenv").config();

//Per evitar l'error de CORS en fer peticions des d'un altre servidor
const cors = require("cors");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");

//Middleware
app.use(bodyParser.json());
app.use(cors());

// Rutes de la API
/*
const posts = require('./routes/api/posts');
app.use('/api/posts', posts);
*/
const cyclists = require("./routes/api/cyclists");
//En cas de ruta iniciada amb  /api/cyclists, la ruta completa la processarà el fitxer superior
app.use("/api/cyclists", cyclists);

// PRODUCTION
if (process.env.NODE_ENV === "production") {
  //Static folder que hem creat en fer   npm run build
  app.use(express.static(__dirname + "/public/"));

  //Handle Single Page Application :   qualsevol ruta -- xtoni
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

/**
 * Sobre 'process':  https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process
 */

// Iniciam el servidor en el Port
const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`Servidor iniciat a http://localhost:${port}`);
  //console.log(process.env.MONGOATLAS_CREDENTIALS)
});

// Base de dades del contenidor de mongodb,  ' '
//mongoose.connect(`mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@localhost:27017@cyclists_db`);

//xtoni
var enContenidor = true;
var host = enContenidor ? "mongo" : "127.0.0.1";

// En el contenidor, no accedeix a 127.0.0.1 sino al nom del servei!  (mongo  en el meu cas)
// https://stackoverflow.com/questions/44508183/docker-compose-mongoose

mongoose.connect(`mongodb://dbUser:abcWqqQ9ZWUu0p4dW@${host}:27017`);

//mongoose.connect('mongodb://dbUser:abcWqqQ9ZWUu0p4dW');

//mongoose.connect(`mongodb://localhost/cyclists_db`);

//mongoose.connect('mongodb://username:password@host:port/database');
