var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://dbUser:abcWqqQ9ZWUu0p4dW@localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("cyclists_db");
  dbo.createCollection("cyclists", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});