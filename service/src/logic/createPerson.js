const createPersonService = require('../services/createPersonService');

function sanitiseBody(body) {
  if (!body || typeof body !== 'object' || !Object.keys(body).length) {
    throw new Error('Body is required');
  }

  const { name, birthdate } = body;
  if (!name || !birthdate) {
    throw new Error('Name and birthdate are required');
  }

  return { name, birthdate };
}

async function createPerson(body) {
  return createPersonService(sanitiseBody(body));
}

module.exports = createPerson;
