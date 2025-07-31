require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const app = express();

app.use(express.json());

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

//TO see all the items in the compact_discs table
app.get('/items', (req, res) => {
    db.query('SELECT * FROM compact_discs', (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return res.status(500).json({ error: 'Database query failed' });
        }
        res.json(results);
    });
});

//To see the specific item based on the id provided in the URL
app.get('/items/:id', (req, res) => {
    const itemId = req.params.id;
    db.query('SELECT * FROM compact_discs WHERE id = ?', [itemId], (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return res.status(500).json({ error: 'Database query failed' });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json(results[0]);
    });
});

//To insert a new item into the compact_discs table
app.post('/items', (req, res) => {
    const { id, title, artist, price } = req.body;
    db.query('INSERT INTO compact_discs (id, title, artist, price) VALUES (?, ?, ?, ?)', [id, title, artist, price], (err, results) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ error: 'Database insert failed' });
        }
        res.status(201).json({ id: results.insertId, title, artist, price });
    });
});

//To update an existing item in the compact_discs table
app.put('/items/:id', (req, res) => {
    const itemId = req.params.id;
    const { title, artist, price } = req.body;
    db.query('UPDATE compact_discs SET title = ?, artist = ?, price = ? WHERE id = ?', [title, artist, price, itemId], (err, results) => {
        if (err) {
            console.error('Error updating data:', err);
            return res.status(500).json({ error: 'Database update failed' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json({ message: 'Item updated successfully' });
    });
});

//To delete an item from the compact_discs table
app.delete('/items/:id', (req, res) => {
    const itemId = req.params.id;
    db.query('DELETE FROM compact_discs WHERE id = ?', [itemId], (err, results) => {
        if (err) {
            console.error('Error deleting data:', err);
            return res.status(500).json({ error: 'Database delete failed' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json({ message: 'Item deleted successfully' });
    });
});