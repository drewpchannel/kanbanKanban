'use strict'
const express = require('express');
const app = express();
var Router = require('./routes/router');
mongoose.connect('mongodb://localhost/test');

app.use(express.static('public'));
app.use('/', Router);

var mongoose = require('mongoose');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log('something works');
});


const PORT = 2459;
app.listen(PORT, function() {
  console.log('testing');
});