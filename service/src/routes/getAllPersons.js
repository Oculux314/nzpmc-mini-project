const getAllPersons = require('../database/getAllPersons');

module.exports = (app) => {
  app.get('/persons', (req, res) => {
    res.send(getAllPersons());
  });
};
