var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  var dbo = db.db("mydb");

  
  dbo.collection("customers123").find({}).toArray(function(err, response){
  //dbo.collection("customers123").find({}, {_id: 0, name: 1, address: 1}).toArray(function(err, response){
   // dbo.collection("customers123").find({}, {address: 0}).toArray(function(err, response){
    if (err) throw err;
    console.log(response);
    db.close();
  });
 
});