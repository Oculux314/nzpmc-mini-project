module.exports = (app) => {
  app.get('/persons', (req, res) => {
    res.send('Successfully reached /persons');
  });
};
