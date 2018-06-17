var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  var dbo = db.db("mydb");

    dbo.collection("customers123").drop(function(err, response){
    if (err) throw err;
    if(response){
      console.log(" collection dropped/deleted");
    }
    
    db.close();
  });
 
});