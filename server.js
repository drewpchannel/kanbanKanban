'use strict'

var gulp = require('gulp');
const express = require('express');
const app = express();

var mongoose = require('mongoose');
var db = mongoose.connection;

mongoose.connect('mongodb://localhost/test');

// app.use('/', Router);

app.use(express.static('public'));
//app.use(express.static('public'));

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
 console.log('db.once');
});


const PORT = 3000;
app.listen(PORT, function() {
  console.log('app.listen');
});
