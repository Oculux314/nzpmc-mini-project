const RED = '\x1b[1;31m';
const RESET = '\x1b[0m';

function logError(res, message = 'internal server error', code = 500) {
  console.error(`${new Date().toLocaleTimeString()}: ${RED}${message}${RESET}`);
  res.status(code).json({ error: message });
}

function errorHandler(app) {
  app.use((err, req, res, next) => {
    logError(res, err.message, 400);
    next();
  });
}

module.exports = errorHandler;
