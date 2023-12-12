const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', false);
const { DB_URL, PASSWORD } = process.env;
const url = DB_URL.replace('<password>', PASSWORD);

function createInteraction(callback) {
  return async (...args) => {
    await mongoose.connect(url);
    const data = await callback(...args);
    mongoose.connection.close();
    return data;
  };
}

module.exports = { createInteraction };
