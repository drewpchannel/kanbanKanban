'use strict'
const express = require('express');
const app = express();
const PORT = 4000;




/*  ROUTES  */
var routr = require ('./routes/router');
app.use('/gallery', routr);
app.use('/', routr);
app.use(express.static('public'));


app.listen(PORT, function() {
  db.sequelize.sync();
});