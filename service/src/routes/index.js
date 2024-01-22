const express = require('express');
const fs = require('fs');
const path = require('path');
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

  const pathToDist = path.join(__dirname, '../../public/dist');
  const indexHtml = fs.readFileSync(path.join(pathToDist, 'index.html')).toString().replaceAll(/\s/g, '');
  log(`Serving static files from ${pathToDist}`, 'INFO');
  log(`[TEST] index.html: ${indexHtml}`);
  app.use(express.static(pathToDist));

  log('Enabling JSON parser', 'INFO');
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
