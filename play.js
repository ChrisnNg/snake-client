// play.js
const { connect } = require('./client');
console.log('Connecting ...');
connect();


const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');
/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(callback) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  callback();
  return stdin;
};

const handleUserInput = function() {
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      console.log("Thanks for using me, buhbye!");
      process.exit();
    }
  });
};

setupInput(handleUserInput);
