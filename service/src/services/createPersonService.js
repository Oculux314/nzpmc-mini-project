const { createInteraction } = require('.');
const Person = require('../models/person');

const createPersonService = createInteraction(async (body) => {
  if (await Person.exists({ name: body.name })) {
    throw new Error(`Person with name '${body.name}' already exists`);
  }

  const person = new Person(body);
  return person.save();
});

module.exports = createPersonService;
