const createPersonService = require('../services/createPersonService');

function createPersonRoute(app) {
  app.post('/persons', async (req, res, next) => {
    try {
      const person = await createPersonService(req.body);
      res.send(person);
    } catch (err) {
      next(err);
    }
  });
}

module.exports = createPersonRoute;
