const initaliseGetAllPersonsRoute = require('./getAllPersonsRoute');
const initaliseCreatePersonRoute = require('./createPersonRoute');

const initialiseRoutes = (app) => {
  initaliseGetAllPersonsRoute(app);
  initaliseCreatePersonRoute(app);
};

module.exports = { initialiseRoutes };
