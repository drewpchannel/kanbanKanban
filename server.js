'use strict'
const express = require('express');
const app = express();
const PORT = 2459;
var Router = require('./routes/router');

// const RouterX = express.Router();


/*  ROUTES  */
// app.use('/kanban', router);
app.use(express.static('public'));
app.use('/', Router);

// app.route('/someroute')
//   .get((req, res) =>{
//     // res.render('index');
//   });


app.listen(PORT, function() {
  console.log('testing');
});

// module.exports = express;