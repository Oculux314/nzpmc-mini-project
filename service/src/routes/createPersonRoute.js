const createPersonService = require('../services/createPersonService');

function sanitiseBody(body) {
  if (!body || typeof body !== 'object' || !Object.keys(body).length) {
    throw new Error('Body is required to create a person');
  }

  const { name, birthdate } = body;
  if (!name || !birthdate) {
    throw new Error('Name and birthdate are required to create a person');
  }

  return { name, birthdate };
}

function createPersonRoute(app) {
  app.post('/persons', async (req, res, next) => {
    try {
      const person = await createPersonService(sanitiseBody(req.body));
      res.send(person);
    } catch (err) {
      next(err);
    }
  });
}

module.exports = createPersonRoute;
