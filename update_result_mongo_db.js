var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  var dbo = db.db("mydb");

  var query = {address: 'Richardson US'};

  var newvalues = {$set: {name: 'DineshKumar', address: 'Chennai IND'}};

    dbo.collection("customers123").updateOne(query, newvalues, function(err, response){
    if (err) throw err;
    console.log(" 1 document updated");
    db.close();
  });
 
});