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
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Kanban');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
 console.log('db.once');
});

var Cards = mongoose.model('cards', {title: String});
/*==================================
=            Middleware            =
==================================*/
// app.use('/', Router);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Testing Routing
app.use('/api', router);
/*==============================
=            Routes            =
==============================*/
app.get('/test', function(req, res) {
  Cards.find({'title' : 'title'})
    .then((dataSomething) => {
      console.log(dataSomething);
      res.send('this is the data' + dataSomething);
    })
    .catch((err) => {
      console.log('this is the error' + err);
    })
  res.sendFile();
});


//Testing Route
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

/*===============================
=            Schemas            =
===============================*/
// var kittySchema = mongoose.Schema({
//     name: String
// });

// var Kitten = mongoose.model('Kitten', kittySchema);
// var silence = new Kitten({ name: 'Silence' });
// console.log(silence.name); // 'Silence'

// kittySchema.methods.speak = () => {
//   var greeting = this.name
//     ? "Meow name is " + this.name
//     : "I don't have a name";
//   console.log(greeting);
// };

// var fluffy = new Kitten({ name: 'fluffy' });
// // fluffy.speak();
// // "Meow name is fluffy"

// fluffy.save(function (err, fluffy) {
//   if (err) return console.error(err);
//   fluffy.speak();
// });

// Kitten.find(function (err, kittens) {
//   if (err) return console.error(err);
//   console.log(kittens);
// });

// Kitten.find({ name: /^Fluff/ }, callback);

/*======================================
=            Listener            =
======================================*/
const PORT = 3000;
app.listen(PORT, (req, res) => {
  console.log('app.listen');
});
