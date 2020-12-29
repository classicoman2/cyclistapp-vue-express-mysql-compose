//EXECUTAR PER CREAR LA BASE DE DADES.

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/cyclists_db";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});