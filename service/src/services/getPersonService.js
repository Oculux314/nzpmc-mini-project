const { createInteraction } = require('.');
const Person = require('../models/person');

const getAllPersonsService = createInteraction((name) => {
  return Person.find({ name });
});

module.exports = getAllPersonsService;
