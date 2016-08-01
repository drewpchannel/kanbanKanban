'use strict'
const express = require('express');
const app = express();
const PORT = 2459;
const Router = require('./routes/router');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/Kanban');
app.use(express.static('public'));
app.use(bodyParser.json());

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
})

var Cards = mongoose.model('cards', {title: String})

app.get('/getAll', function(req, res) {
  Cards.find({})
    .then((dataSomething) => {
      res.send(dataSomething)
    })
    .catch((err) => {
      console.log('this is the error' + err)
    })
});

app.get('/info', function(req, res) {
  res.send('info sent')
/*  Cards.find({'title' : 'title'})
    .then((dataSomething) => {
      console.log(dataSomething)
    })
    .catch((err) => {
      console.log('this is the error' + err)
    })*/
});

app.put('/:cardId', (req, res) => {
  console.log(req.body)
})

app.listen(PORT, (req, res) => {
  console.log('Server is on')
})
