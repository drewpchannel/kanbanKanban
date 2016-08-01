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
// mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o'); // connect to our database
mongoose.connect('mongodb://localhost/Kanban');
var db = mongoose.connection;
mongoose.Promise = require('bluebird');

const CardSchema = require('./public/js/models/CardSchema');
var Cards = mongoose.model('cards', {title: String});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
 console.log('db.once');
});



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

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);


/*----------  Hold this code  ----------*/

// app.get('/test', (req, res) => {
//   Cards.find({'title' : 'title'})
//     .then((dataSomething) => {
//       console.log(dataSomething);
//       res.send('this is the data' + dataSomething);
//     })
//     .catch((err) => {
//       console.log('this is the error' + err);
//     })
//   res.sendFile();
// });

app.get('/info', function(req, res) {
  res.send('info sent');
/*  Cards.find({'title' : 'title'})
    .then((dataSomething) => {
      console.log(dataSomething)
    })
    .catch((err) => {
      console.log('this is the error' + err)
    })*/
});

app.get('/puttest', (req, res) => {

});

//Testing Route
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

/*======================================
=            Listener            =
======================================*/
const PORT = 2459;
app.listen(PORT, (req, res) => {
  console.log('app.listen');
});






/**
 *
 * Block comment
 *
 */


 'use strict'
 const express = require('express');
 const app = express();
 const PORT = 2459;

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
   var query = { _id: 'borne' };
   Model.update(query, { name: 'jason borne' }, options, callback)

   // is sent as

   Model.update(query, { $set: { name: 'jason borne' }}, options, callback)
 })

 app.listen(PORT, (req, res) => {
   console.log('Server is on')
 })