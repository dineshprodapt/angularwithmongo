var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  var dbo = db.db("mydb");

  
  dbo.collection("customers123").findOne({}, function(err, response){
    if (err) throw err;
    console.log(response.name);
    db.close();
  });
 
});