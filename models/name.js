
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var nameSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    fName: String,
    lName: String
});

// Return model
module.exports = restful.model('Names', nameSchema);
