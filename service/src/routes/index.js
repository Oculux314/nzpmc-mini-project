const express = require('express');
const getAllPersonsRoute = require('./getAllPersonsRoute');
const createPersonRoute = require('./createPersonRoute');
const defaultRoute = require('./defaultRoute');
const errorHandler = require('./errorHandler');

function initialiseUses(app) {
  app.use(express.json());
}

function initialiseRoutes(app) {
  getAllPersonsRoute(app);
  createPersonRoute(app);
}

function initialiseErrorHandling(app) {
  defaultRoute(app); // 404 page
  errorHandler(app); // Other errors
}

function initialiseServer(app) {
  initialiseUses(app);
  initialiseRoutes(app);
  initialiseErrorHandling(app);
}

module.exports = { initialiseServer };
