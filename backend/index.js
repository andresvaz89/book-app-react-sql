import express from 'express';
import mysql from 'mysql';

const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'test'
});

app.get('/', (req, res) => {
  res.json('This is the backend');
});

app.get('/books', (req, res) => {
  const q = 'SELECT * from BOOKS';
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log('Connected to backend!1');
});
