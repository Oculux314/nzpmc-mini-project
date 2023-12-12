const getAllPersonsService = require('../services/getAllPersonsService');

async function getAllPersons() {
  const persons = await getAllPersonsService();
  return persons;
}

module.exports = getAllPersons;
