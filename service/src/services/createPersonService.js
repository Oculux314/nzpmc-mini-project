const { createInteraction } = require('.');
const Person = require('../models/person');

const createPersonService = createInteraction(async ({ name, birthdate }) => {
  if (await Person.exists({ name })) {
    throw new Error(`Person with name '${name}' already exists`);
  }

  const person = new Person({ name, birthdate });
  return person.save();
});

module.exports = createPersonService;
