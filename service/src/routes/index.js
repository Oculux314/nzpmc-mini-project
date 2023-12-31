const express = require('express');
const cors = require('cors');
const getAllPersonsRoute = require('./getAllPersonsRoute');
const getPersonRoute = require('./getPersonRoute');
const createPersonRoute = require('./createPersonRoute');
const defaultRoute = require('./defaultRoute');
const errorHandler = require('./errorHandler');
const log = require('../utils/log');

function initialiseUses(app) {
  if (process.env.MODE === 'DEV') {
    log('DEV mode: enabling CORS policy *', 'INFO');
    app.use(cors());
  }
  app.use(express.static('public/dist'));
  app.use(express.json());
}

function initialiseRoutes(app) {
  getAllPersonsRoute(app);
  getPersonRoute(app);
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
