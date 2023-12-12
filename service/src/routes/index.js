const initaliseGetAllPersonsRoute = require('./getAllPersons');
const initaliseCreatePersonRoute = require('./createPerson');

module.exports = (app) => {
  initaliseGetAllPersonsRoute(app);
  initaliseCreatePersonRoute(app);
};
