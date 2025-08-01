const express = require('express');
const app = express();
const mysql = require('mysql2');

app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'n3u3da!',
    database: 'bank'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

app.post('/create', (req, res) => {
    const { account_number, name, balance, pin } = req.body;
    const sql = 'INSERT INTO bank_account (account_number, name, balance, pin) VALUES (?, ?, ?, ?)';
    db.query(sql, [account_number, name, balance, pin], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send({ error: 'Failed to create account' });
        }
        res.status(201).send({
            message: 'Account created',
            account_number
        });
    });
});

module.exports = { app, db }; // export both
