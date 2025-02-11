const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: '10.211.55.3',   // VM 1 IP
  user: 'micro_user',
  password: 'password123',
  database: 'microservice_db'
});


app.get('/', (req, res) => {
  db.query('SELECT NOW() AS time', (err, results) => {
    if (err) throw err;
    res.send(`Current Time from DB: ${results[0].time}`);
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`API listening at http://localhost:${port}`);
});
