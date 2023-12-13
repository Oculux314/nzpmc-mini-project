const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[1;33m';
const BLUE = '\x1b[34m';
const RESET = '\x1b[0m';

function getColourCode(type) {
  switch (type) {
  case 'ERROR':
    return RED;
  case 'SUCCESS':
    return GREEN;
  case 'WARN':
    return YELLOW;
  case 'INFO':
    return BLUE;
  default:
    return RESET;
  }
}

function log(message, type) {
  const colourCode = getColourCode(type);
  console.log(`${colourCode}${message}${RESET}`);
}

module.exports = log;
