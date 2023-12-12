const createPerson = require('../logic/createPerson');

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

function createPersonRoute(app) {
  app.post('/persons', async (req, res, next) => {
    try {
      const person = await createPerson(sanitiseBody(req.body));
      res.send(person);
    } catch (err) {
      next(err);
    }
  });
}

module.exports = createPersonRoute;
