const createPerson = require('../logic/createPerson');

function createPersonRoute(app) {
  app.post('/persons', async (req, res, next) => {
    createPerson(req.body).catch(next).then((person) => {
      res.send(person);
    });
  });
}

module.exports = createPersonRoute;
