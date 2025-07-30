const express = require('express');
const app = express();
const mysql = require('mysql2');

app.use(express.json());

//connecrtion to mysql database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'n3u3da!',
    database: 'sample'
});

//start the server
app.listen(3000, () => {
    console.log('Server is runnin at http://localhost:3000');
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
});

//Get all users
app.get('/users/:id', (req, res) => {
    db.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);  
    });
});