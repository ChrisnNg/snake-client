/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

let connection;

const setupInput = function(conn) {
  connection = conn;
  stdin.resume();
  handleUserInput(conn);
  return stdin;
};

const handleUserInput = function(conn) {
  connection = conn;
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      console.log("Thanks for using me, buhbye!");
      process.exit();
    }
    if (key === 'w') {
      conn.write("Move: up");
    }
    if (key === 'a') {
      conn.write("Move: left");
    }
    if (key === 's') {
      conn.write("Move: down");
    }
    if (key === 'd') {
      conn.write("Move: right");
    }
    if (key === '0') {
      conn.write(`Say: hello`);
    }
    if (key === '9') {
      conn.write(`Say: great day to code`);
    }
    if (key === '8') {
      conn.write(`Say: race you!`);
    }
  });
};


module.exports = { setupInput };