const express = require('express');
const initaliseRoutes = require('./routes');
require('dotenv').config();

module.exports = () => {
  const app = express();
  const PORT = process.env.PORT || 3001;

  initaliseRoutes(app);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
