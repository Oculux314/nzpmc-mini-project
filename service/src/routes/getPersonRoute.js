const getPersonService = require('../services/getPersonService');

function sanitiseName(name) {
  if (!name) {
    throw new Error('Name is required to find a person');
  }

  return name.trim();
}

function getPersonRoute(app) {
  app.get('/persons/:name', async (req, res, next) => {
    try {
      const persons = await getPersonService(sanitiseName(req.params.name));
      res.send(persons);
    } catch (err) {
      next(err);
    }
  });
}

module.exports = getPersonRoute;
