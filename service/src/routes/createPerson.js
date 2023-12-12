const createPerson = require('../database/createPerson');

function sanitiseBody(body) {
  if (!body) {
    throw new Error('Body is required');
  }

  const { name, DOB } = body;
  if (!name || !DOB) {
    throw new Error('Name and DOB are required');
  }

  return { name, DOB };
}

module.exports = (app) => {
  app.post('/persons', (req, res) => {
    throw new Error('Unimplemented');
    console.log(req.body);
    try {
      const person = createPerson(sanitiseBody(req.body));
      res.send(person);
    } catch (error) {
      res.status(400).send(error.message);
    }
  });
};
