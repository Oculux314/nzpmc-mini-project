const { createInteraction } = require('.');
const Person = require('../models/person');

const getAllPersonsService = createInteraction(() => {
  return Person.find({});
});

module.exports = getAllPersonsService;
