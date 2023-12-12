const getPersonService = require('../services/getPersonService');

async function getAllPersons(name) {
  return getPersonService(name);
}

module.exports = getAllPersons;
