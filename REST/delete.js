
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

app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM user WHERE id = ?', [req.params.id], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('User not found');
        }
        res.json({ message: 'User deleted successfully' });
    });
});

/*Invoke this in PowerShell to test the delete method:
 Invoke-RestMethod -Uri http://localhost:3000/users/2 -Method DELETE -Headers @{"Content-Type" = "application/json"} 
Replace '7' with the id of the user you want to delete. 
*/