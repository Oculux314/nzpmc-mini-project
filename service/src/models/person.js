const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  birthdate: {
    type: Date,
    required: true,
  },
});

/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
personSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = doc._id.toString();
    delete ret._id;
    delete ret.__v;
  },
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
