var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  var dbo = db.db("mydb");

  //var query = {address: "Denvar US"};

  var query = { name: 1};

    dbo.collection("customers123").find().sort(query).toArray(function(err, response){
    if (err) throw err;
    console.log(response);
    db.close();
  });
 
});