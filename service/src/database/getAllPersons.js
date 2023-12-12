const { createInteraction } = require('.');
const Person = require('../models/person');

const getAllPersons = createInteraction(() => {
  Person.find({});
});

module.exports = getAllPersons;
