const express = require('express');
const { initialiseServer } = require('./routes');
const log = require('./utils/log');
require('dotenv').config();

function logStartup(mode, port) {
  if (mode === 'PROD') {
    log(`Service is running in production mode on port ${port}`);
  } else if (mode === 'DEV') {
    log(`Service is running in development mode at http://localhost:${port}`);
  } else {
    log(`WARN: Unrecognised .env MODE: '${mode}'`, 'WARN');
    log('Possible values are: PROD, DEV', 'WARN');
    process.exit(1);
  }
}

function App() {
  log(''); // Blank line for readability
  const app = express();
  const { PORT = 3001, MODE } = process.env;

  initialiseServer(app);

  app.listen(PORT, () => logStartup(MODE, PORT));
}

module.exports = App;
