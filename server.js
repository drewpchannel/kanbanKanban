'use strict'
/*=====================================
=            DevDependencies          =
=====================================*/
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const gulp = require('gulp');
const router = express.Router();

/*================================
=            Mongoose            =
================================*/
const mongoose = require('mongoose');
      mongoose.connect('mongodb://localhost/Kanban');
      mongoose.Promise = require('bluebird');
const db = mongoose.connection;
// console.log(db);
// const CardSchema = require('./public/js/models/CardSchema');
const Card = mongoose.model('Card', {
  title: String,
  description: String,
  priority: String,
  status : String,
  createdBy: String,
  assignedTo: String,
  date: {type: Date, default: Date.now}
});

db.on('error',  console.error.bind(console, 'connection error:'));
db.once('open', () => {
 console.log('db.once');
});


/*==================================
=            Middleware            =
==================================*/
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Testing Route
app.use('/test', router);
router.get('/', function(req, res) {
  res.json({ message: 'Test route success!'  });
});


/*==============================
=            Routes            =
==============================*/
app.get('/getAll', function(req, res) {
  Card.find({})
    .then((dataSomething) => {
      console.log(dataSomething)
      res.send(dataSomething)
    })
    .catch((err) => {
      console.log('this is the error' + err)
    });
});

app.post('/new', (req, res) => {
  var card = new Card({ "title" : "fresh", "description" : "minty", "priority" : "lax", "status" : "todo", "createdBy" : "xin", "assignedTo" : "tyler"});
  card.save();
  res.send({test:"success!"});
});

app.get('/seed', (req, res) => {
  var card = new Card({ "title" : "a title", "description" : "some desc", "priority" : "red alert", "status" : "todo", "createdBy" : "bob", "assignedTo" : "tyler"});
  card.save();
  card = new Card({ "title" : "b title", "description" : "some desc", "priority" : "red alert", "status" : "todo", "createdBy" : "bob", "assignedTo" : "tyler"});
  card.save();
  card = new Card({ "title" : "c title", "description" : "some desc", "priority" : "red alert", "status" : "todo", "createdBy" : "bob", "assignedTo" : "tyler"});
  card.save();
  card = new Card({ "title" : "q title", "description" : "some desc", "priority" : "red alert", "status" : "doing", "createdBy" : "bob", "assignedTo" : "tyler"});
  card.save();
  card = new Card({ "title" : "r title", "description" : "some desc", "priority" : "red alert", "status" : "doing", "createdBy" : "bob", "assignedTo" : "tyler"});
  card.save();
  card = new Card({ "title" : "s title", "description" : "some desc", "priority" : "red alert", "status" : "doing", "createdBy" : "bob", "assignedTo" : "tyler"});
  card.save();
  card = new Card({ "title" : "x title", "description" : "some desc", "priority" : "red alert", "status" : "done", "createdBy" : "bob", "assignedTo" : "tyler"});
  card.save();
  card = new Card({ "title" : "y title", "description" : "some desc", "priority" : "red alert", "status" : "done", "createdBy" : "bob", "assignedTo" : "tyler"});
  card.save();
  card = new Card({ "title" : "z title", "description" : "some desc", "priority" : "red alert", "status" : "done", "createdBy" : "bob", "assignedTo" : "tyler"});
  card.save();
});

/*==============================
=          Test Routes         =
==============================*/
// Uses Mongoose to DELETE Posts by _id in database
// app.delete('/delete/:id', function(req, res) {
app.delete('/delete', function(req, res) {
  console.log("this is del mofo", req.body);
  Card.remove({_id: req.body.id}, () =>{
  res.json({message: 'Deleted!'});
  });
});


app.get('/testing', function (req, res) {
  Card.find({}, function (err, docs) {
      res.json(docs);
  });
});

app.put('/:cardId', (req, res) => {
  var query = { _id: 'borne' };
  Model.update(query, { name: 'jason borne' }, options, callback)

  // is sent as
  Model.update(query, { $set: { name: 'jason borne' }}, options, callback)
})

/*======================================
=            Listener            =
======================================*/
const PORT = 2459;
app.listen(PORT, (req, res) => {
  console.log('app.listen');
});