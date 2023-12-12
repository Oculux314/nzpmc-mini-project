const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: String,
  DOB: Date, // Date of birth
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
