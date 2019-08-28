const net = require('net');
/**
 * Establishes connection with the game server
 */

const connect = function() {
  const conn = net.createConnection({
    host: '192.168.88.151',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('connect', () => {// return sucessful connection when connected
    console.log("Successfully connected to game server");
    conn.write("Name: Cng");// write tag

  });
  conn.on('data', (data) => {// return data sent by server
    console.log('Server says: ', data);
  });

  return conn;
};

module.exports = { connect };