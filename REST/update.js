
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

app.put('/users/:id', (req, res) => {
    const {name, email } = req.body;
    const id = req.params.id;
    db.query('UPDATE user SET u_name = ?, email = ? WHERE id = ?', [name, email, req.params.id], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('User not found');
        }
        res.json({ message: 'User updated successfully' });
    });
});

/*Invoke this in PowerShell to test the put method:
 Invoke-RestMethod -Uri http://localhost:3000/users/2 -Method PUT -Headers @{"Content-Type" = "application/json"} -Body '{"name":"John Doe lala","email":"john.doe@gmail.com"}'

 const {name, email } = req.body;
 const id = req.params.id;
 if we write thing in url we use req.params.id and if we write in body we use req.body.name and req.body.email
 */