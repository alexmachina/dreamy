const mongoose = require('mongoose');

let schema = new mongoose.Schema({
  date: {type: Date, required:true},
  dream: String
});

module.exports = mongoose.model('Day',schema);
