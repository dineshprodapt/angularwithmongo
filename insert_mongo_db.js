var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  var dbo = db.db("mydb");

  var myobj = {name: "Elena", address: "Denvar US"};

  dbo.collection("customers").insertOne(myobj, function(err, response){
  //dbo.createCollection("customers", function(err, response){
    if (err) throw err;
    console.log("1 document inserted!");
    db.close();
  });
 
});