const express = require('express');
const initaliseGetAllPersonsRoute = require('./getAllPersonsRoute');
const initaliseCreatePersonRoute = require('./createPersonRoute');

const initialisePreuses = (app) => {
  app.use(express.json());
};

const initialiseRoutes = (app) => {
  initaliseGetAllPersonsRoute(app);
  initaliseCreatePersonRoute(app);
};

const initialisePostuses = (app) => {
  // app.use((req, res, next) => {
  //   res.status(404).send('Not found');
  // });
};

const initialiseServer = (app) => {
  initialisePreuses(app);
  initialiseRoutes(app);
  initialisePostuses(app);
};

module.exports = { initialiseServer };
