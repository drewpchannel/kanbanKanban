'use strict'
const express = require('express');
const app = express();
const PORT = 2459;
var Router = require('./routes/router');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
app.use(express.static(__dirname));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
})

app.get('/', function(req, res) {
    res.sendFile(__dirname+'/public/index.html');
});

app.listen(PORT, (req, res) => {
  console.log('Server is on')
})
