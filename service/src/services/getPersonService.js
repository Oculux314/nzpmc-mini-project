const { createInteraction } = require('.');
const Person = require('../models/person');

const getPersonService = createInteraction(async (name) => {
  const results = await Person.find({ name });
  if (results.length > 0) {
    return results[0];
  }
  throw new Error(`Person with name '${name}' not found`);
});

module.exports = getPersonService;
