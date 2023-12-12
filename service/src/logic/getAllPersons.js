const getAllPersonsService = require('../services/getAllPersonsService');

async function getAllPersons() {
  return getAllPersonsService();
}

module.exports = getAllPersons;
