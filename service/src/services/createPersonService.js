const { createInteraction } = require('.');
const Person = require('../models/person');

const createPersonService = createInteraction(({ name, DOB }) => {
  const person = new Person({ name, DOB });
  return person.save();
});

module.exports = createPersonService;
