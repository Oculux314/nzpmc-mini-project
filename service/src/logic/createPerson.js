const createPersonService = require('../services/createPersonService');

async function createPerson(body) {
  return createPersonService(body);
}

module.exports = createPerson;
