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

app.put('/withdraw/:id', (req, res) => {
    const account_number = req.params.id;
    const { amount, pin } = req.body;

    db.query('SELECT pin, balance FROM bank_account WHERE account_number = ?', [account_number], (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return res.status(500).json({ error: 'Database query failed' });
        }
        //check if the account exists and pin matches
        //Here the pin in database is stored as number and when we retrive from body it is string, so we need to convert it or we can use != instead of !==
        if (results.length === 0 || results[0].pin != pin) {
            return res.status(403).json({ error: 'Incorrect PIN' });
        }
        //check if the balance is sufficient
        if (results[0].balance < amount) {
            return res.status(400).json({ error: 'Insufficient funds' });
        }

        const updatedBalance = results[0].balance - amount;

        //Update the balance
        db.query('UPDATE bank_account SET balance = balance - ? WHERE account_number = ?', [amount, account_number], (err, results) => {
            if (err) {
                console.error('Error updating data:', err);
                return res.status(500).json({ error: 'Database update failed' });
            }
            if (results.affectedRows === 0) {
                return res.status(404).json({ error: 'Account not found' });
            }
            res.json({ message: 'Withdrawal successful'
                    , updatedBalance: updatedBalance });
             });
        });

    });

app.get('/balance/:id', (req, res) => {
    const account_number = req.params.id;

    db.query('SELECT balance FROM bank_account WHERE account_number = ?', [account_number], (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return res.status(500).json({ error: 'Database query failed' });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Account not found' });
        }
        res.json({ balance: results[0].balance });
    });
});
