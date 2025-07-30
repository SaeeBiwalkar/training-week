require('dotenv').config();
const express = require('express');
const app = express();
const mysql = require('mysql2');

app.use(express.json());


const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

const PORT = process.env.PORT || 3000;


//start the server
app.listen(PORT, () => {
    console.log('Server is runnin at http://localhost:3000');
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
});

//Get all users
app.get('/users', (req, res) => {
    db.query('SELECT * FROM user', (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);  
    });
});