var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  var dbo = db.db("mydb");

  //var query = {address: "Denvar US"};

  //var query = { name: 1};

  var query = {name: 'Vinoth'};

    dbo.collection("customers123").deleteOne(query, function(err, response){
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
 
});