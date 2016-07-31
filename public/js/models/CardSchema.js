'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


/*================================
=            Schema's            =
================================*/

const CardSchema = new Schema({
  id: Number,
  title: String,
  priority: String,
  status : String,
  createdBy: String,
  assignedTo: String,
});


/*=====  End of CardSchema  ======*/

module.exports = mongoose.model('card', CardSchema);