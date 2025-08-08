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

app.get('/accounts/:id', (req, res) => {
    const sql = 'SELECT * FROM bank_account WHERE account_number = ?';
    db.query(sql, [req.params.id], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send({ error: 'Failed to fetch account' });
        }
        if (results.length === 0) {
            return res.status(404).send({ error: 'Account not found' });
        }
        res.send(results[0]);
    }
    );
});   

module.exports = { app, db }; // export both
