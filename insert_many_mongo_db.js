var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  var dbo = db.db("mydb");

  /*var myobj = [
    {name: "Elena", address: "Denvar US"},
    {name: "Dinesh", address: "Richardson US"},
    {name: "Sarath", address: "Boston US"},
    {name: "Vinoth", address: "NY US"},
    {name: "Santhosh", address: "Chicago US"},
    {name: "Reach", address: "Denvar US"},
      
  ];*/

  var myobj = [
    {_id: 123, name: 'Elena'},
    {_id: 124, name: 'Reach'},
    {_id: 125, name: 'Dinesh'},
  ];

  dbo.collection("customers123").insertMany(myobj, function(err, response){
  //dbo.createCollection("customers", function(err, response){
    if (err) throw err;
    console.log("Number of document inserted = "+response.insertedCount);
    db.close();
  });
 
});