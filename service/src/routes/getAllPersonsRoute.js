const getAllPersonsService = require('../services/getAllPersonsService');

function getAllPersonsRoute(app) {
  app.get('/persons', (req, res, next) => {
    getAllPersonsService().catch(next).then((persons) => {
      res.send(persons);
    });
  });
}

module.exports = getAllPersonsRoute;
