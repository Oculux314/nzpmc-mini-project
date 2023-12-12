const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: String,
  birthdate: Date,
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
