require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const { execPath } = require('process');
const app = express();

app.use(express.json());
app.use(express.static('public'));

const port = process.env.PORT || 3000;
const host = process.env.DB_HOST || 'localhost';
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;

const db = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

app.get('/display', (req, res) => {
    db.query('SELECT * FROM bank_account', (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return res.status(500).json({ error: 'Database query failed' });
        }
        res.json(results);
    });
} );

app.get('/display/:id', (req, res) => {
    const account_number = req.params.id;
    db.query('SELECT * FROM bank_account WHERE account_number = ?', [account_number], (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return res.status(500).json({ error: 'Database query failed' });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Account not found' });
        }
        res.json(results[0]);
    });
});

app.put('/withdraw/:id', (req, res) => {
    const account_number = req.params.id;
    const { amount } = req.body;
    db.query('UPDATE bank_account SET balance = balance - ? WHERE account_number = ?', [amount, account_number], (err, results) => {
        if (err) {
            console.error('Error updating data:', err);
            return res.status(500).json({ error: 'Database update failed' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Account not found' });
        }
        res.json({ message: 'Withdrawal successful' });
    });
});

app.put('/deposit/:id', (req, res) => {
    const account_number = req.params.id;
    const { amount } = req.body;
    db.query('UPDATE bank_account SET balance = balance + ? WHERE account_number = ?', [amount, account_number], (err, results) => {
        if (err) {
            console.error('Error updating data:', err);
            return res.status(500).json({ error: 'Database update failed' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Account not found' });
        }
        res.json({ message: 'Deposit successful' });
    });
});

app.post('/create', (req, res) => {
    const { account_number, name, balance, pin } = req.body;
    db.query('INSERT INTO bank_account (account_number, name, balance, pin) VALUES (?, ?, ?, ?)', [account_number, name, balance, pin], (err, results) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ error: 'Database insert failed' });
        }
        res.status(201).json({ account_number: results.insertId, name, balance, pin });
    });
});