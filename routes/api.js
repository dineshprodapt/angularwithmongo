
// Dependencies 
var express = require('express');
var router = express.Router();

//Product
var Name = require('../models/name');
Name.methods(['get', 'put', 'post', 'delete']);
Name.register(router, '/names');

// Return router
module.exports = router;
