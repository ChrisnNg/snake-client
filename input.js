/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput();
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

module.exports = { setupInput };