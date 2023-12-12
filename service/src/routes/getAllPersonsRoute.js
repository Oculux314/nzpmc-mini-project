const getAllPersons = require('../logic/getAllPersons');

function getAllPersonsRoute(app) {
  app.get('/persons', (req, res, next) => {
    getAllPersons().catch(next).then((persons) => {
      res.send(persons);
    });
  });
}

module.exports = getAllPersonsRoute;
