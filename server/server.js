const express = require("express");
const app = express();
//Carrega variables entorn de fitxer .env
require("dotenv").config();
const mongoose = require("mongoose");

//Per evitar l'error de CORS en fer peticions des d'un altre servidor
const cors = require("cors");
const bodyParser = require("body-parser");

//Middleware
app.use(bodyParser.json());
app.use(cors());

// Rutes de la API
const cyclists = require("./routes/api/cyclists");
const teams = require("./routes/api/teams");
//En cas de ruta iniciada amb  /api/cyclists, la ruta completa la processarà el fitxer superior
app.use("/api/cyclists", cyclists);
app.use("/api/teams", teams);

// PRODUCTION
if (process.env.NODE_ENV === "production") {
  //Static folder que hem creat en fer   npm run build
  app.use(express.static(__dirname + "/public/"));

  //Handle Single Page Application :   qualsevol ruta -- xtoni
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

// Iniciam el servidor en el Port
const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`Servidor iniciat a http://localhost:${port}`);
  //console.log(process.env.MONGOATLAS_CREDENTIALS)
});

// MONGO_HOST valdra 'mongo'  si empram docker-compose o network,  127.0.0.1 altrament
// https://stackoverflow.com/questions/44508183/docker-compose-mongoose
const url = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.MONGO_HOST}:27017`;
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});


