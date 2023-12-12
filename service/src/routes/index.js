const express = require('express');
const getAllPersonsRoute = require('./getAllPersonsRoute');
const createPersonRoute = require('./createPersonRoute');

const initialisePreuses = (app) => {
  app.use(express.json());
};

const initialiseRoutes = (app) => {
  getAllPersonsRoute(app);
  createPersonRoute(app);
};

const initialisePostuses = (app) => {
  // TODO

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
