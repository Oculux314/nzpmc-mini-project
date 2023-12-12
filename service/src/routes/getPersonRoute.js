const getPerson = require('../logic/getPerson');

function sanitiseName(name) {
  if (!name) {
    throw new Error('Name is required');
  }

  return name.trim();
}

function getPersonRoute(app) {
  app.get('/persons/:name', async (req, res, next) => {
    try {
      const persons = await getPerson(sanitiseName(req.params.name));
      res.send(persons);
    } catch (err) {
      next(err);
    }
  });
}

module.exports = getPersonRoute;
