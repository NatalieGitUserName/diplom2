const express = require('express');
const bcrypt = require('bcrypt');
const mysql = require('mysql');
const cors = require('cors')

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'Natalie_db',
    port: '3306'
});


const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    method: ["GET", "POTS", "PUT", "DELETE"],
    credentials: true,
}))
app.use(express.json());


app.post('/register', (req, res) => {
    const { username, password, email } = req.body;
    // Check if the user already exists
    pool.query('SELECT * FROM users WHERE username = ? OR email = ?', [username, email], (error, results) => {
        if (error) {
            console.error('Error checking existing user:', error);
            return res.status(500).json({ error: 'An error occurred' });
        }

        if (results.length > 0) {
            return res.status(409).json({ error: 'User already exists' });
        }

        // Hash the password
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
                console.error('Error hashing password:', err);
                return res.status(500).json({ error: 'An error occurred' });
            }

            // Insert the user into the database
            pool.query('INSERT INTO users (username, password, email) VALUES (?, ?, ?)', [username, hash, email], (err, result) => {
                if (err) {
                    console.error('Error registering user:', err);
                    return res.status(500).json({ error: 'An error occurred' });
                }

                res.status(200).json({ message: 'User registered successfully' });
            });
        });
    });
});


app.get('/getOffers', (req, res) => {
    pool.query('SELECT * FROM offers', (error, results) => {
        return res.status(200).send(results)}

    )
    res.status(500)
})
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});