const express = require('express');
const { initialiseServer } = require('./routes');
require('dotenv').config();

module.exports = () => {
  const app = express();
  const { PORT } = process.env || 3001;

  initialiseServer(app);

  app.listen(PORT, () => {
    console.log(`Service is running on port ${PORT}`);
  });
};
