const { createInteraction } = require('.');
const Person = require('../models/person');

const createPersonService = createInteraction(({ name, birthdate }) => {
  const person = new Person({ name, birthdate });
  return person.save();
});

module.exports = createPersonService;
