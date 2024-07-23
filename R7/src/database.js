const mysql = require("mysql2");

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'C00ding!',
  database: 'appbooks',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0
}).promise();

console.log("Conection with DDBB created");

module.exports = { pool };