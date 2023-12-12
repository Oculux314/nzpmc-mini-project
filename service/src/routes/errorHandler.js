function logError(res, message = 'internal server error', code = 500) {
  console.error(`${Date.now()}: ${message}`);
  res.status(code).json({ error: message });
}

function errorHandler(app) {
  app.use((err, req, res, next) => {
    logError(res, err.message, 400);
    next();
  });
}

module.exports = errorHandler;
