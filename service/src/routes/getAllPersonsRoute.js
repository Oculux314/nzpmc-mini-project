const getAllPersons = require('../services/getAllPersonsService');

const initialiseGetAllPersonsRoute = (app) => {
  app.get('/persons', (req, res) => {
    res.send(getAllPersons());
  });
};

module.exports = initialiseGetAllPersonsRoute;
