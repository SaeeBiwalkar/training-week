//NOT working code 
//REST/insert.js



//Display the specific data based on the id provided in the URL

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

app.post('/users', (req, res) => {
    const {id, name, email } = req.body;
    db.query('INSERT INTO user (id, u_name, email) VALUES (?, ?, ?)', [id, name, email], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).json({ id: results.insertId,id, name, email });
    });
});


/*
invoke-RestMethod -Uri http://localhost:3000/users -Method POST  -Headers @{"Content-Type"="application/json"} -Body '{"id":"7","name":"john","email":"jhn.doe@gmail.com"}'

type this in powershell to test the post method
*/