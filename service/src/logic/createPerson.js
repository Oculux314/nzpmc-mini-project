const createPersonService = require('../services/createPersonService');

function sanitiseBody(body) {
  if (!body || typeof body !== 'object' || body.keys.length === 0) {
    throw new Error('Body is required');
  }

  const { name, DOB } = body;
  if (!name || !DOB) {
    throw new Error('Name and DOB are required');
  }

  return { name, DOB };
}

async function createPerson(body) {
  return createPersonService(sanitiseBody(body));
}

module.exports = createPerson;
