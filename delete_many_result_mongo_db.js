var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  var dbo = db.db("mydb");

  var query = {address: /^D/ };

    dbo.collection("customers123").deleteMany(query, function(err, response){
    if (err) throw err;
    console.log(response.result.n +"documents deleted");
    db.close();
  });
 
});