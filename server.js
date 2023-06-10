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
    method: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))
app.use(express.json({limit: '50mb'}));
app.use(express.json());

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check if the user exists
    pool.query('SELECT * FROM users WHERE username = ? OR email = ?', [username, username], (error, results) => {
        if (error) {
            console.error('Error checking user:', error);
            return res.status(500).json({ error: 'An error occurred' });
        }

        if (results.length === 0) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        const user = results[0];

        // Compare the provided password with the hashed password
        bcrypt.compare(password, user.password, (err, match) => {
            if (err) {
                console.error('Error comparing passwords:', err);
                return res.status(500).json({ error: 'An error occurred' });
            }

            if (!match) {
                return res.status(401).json({ error: 'Invalid username or password' });
            }

            delete results[0].password
            // Passwords match, user is authenticated
            res.status(200).json({...results[0], message: 'Login successful' });
        });
    });
});
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
                pool.query('SELECT * FROM users WHERE username = ?', [username, username], (error, results) => {
                    delete results[0].password
                    res.status(200).json({...results[0], message: 'User registered successfully' });
                })
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
app.get('/getOffer', (req, res) => {
    const {id} = req.query

    pool.query(`SELECT * FROM offers WHERE id = ${id}`, (error, results) => {
        return res.status(200).send(results[0])}
    )
    res.status(500)
})
app.post('/setFirstName', (req, res) => {
    const {firstName, id} = req.body;

    pool.query('UPDATE users SET firstName = ? WHERE id = ?', [firstName, id], (error, results) => {
        if (error) {console.error('Error registering user:', error);}
        pool.query('SELECT * FROM users WHERE id = ?', [id], (error, results) => {
            if (error) {console.error('Error checking user:', error);}
            delete results[0].password
            res.status(200).json(results[0])
        });
    });
})
app.post('/setSecondName', (req, res) => {
    const {secondName, id} = req.body;

    pool.query('UPDATE users SET secondName = ? WHERE id = ?', [secondName, id], (error, results) => {
        if (error) {console.error('Error registering user:', error);}
        pool.query('SELECT * FROM users WHERE id = ?', [id], (error, results) => {
            if (error) {console.error('Error checking user:', error);}
            delete results[0].password
            res.status(200).json(results[0])
        });
    });
})
app.post('/setThirdName', (req, res) => {
    const {thirdName, id} = req.body;

    pool.query('UPDATE users SET thirdName = ? WHERE id = ?', [thirdName, id], (error, results) => {
        if (error) {console.error('Error registering user:', error);}
        pool.query('SELECT * FROM users WHERE id = ?', [id], (error, results) => {
            if (error) {console.error('Error checking user:', error);}
            delete results[0].password
            res.status(200).json(results[0])
        });
    });
})
app.post('/setPhoto', (req, res) => {
    const {photo, id} = req.body;

    pool.query('UPDATE users SET photo = ? WHERE id = ?', [photo, id], (error, results) => {
        if (error) {console.error('Error registering user:', error);}
        pool.query('SELECT * FROM users WHERE id = ?', [id], (error, results) => {
            if (error) {console.error('Error checking user:', error);}
            delete results[0].password
            res.status(200).json(results[0])
        });
    });
})
app.post('/setBirthday', (req, res) => {
    const {birthday, id} = req.body;

    pool.query('UPDATE users SET birthday = ? WHERE id = ?', [birthday, id], (error, results) => {
        if (error) {console.error('Error registering user:', error);}
        pool.query('SELECT * FROM users WHERE id = ?', [id], (error, results) => {
            if (error) {console.error('Error checking user:', error);}
            delete results[0].password
            res.status(200).json(results[0])
        });
    });
})
app.post('/subscribe', (req, res) => {
    const {offersSub, id} = req.body;
console.log(req.body)
        pool.query('UPDATE users SET offersSub = ? WHERE id = ?', [JSON.stringify(offersSub), id], (error, results) => {
        if (error) {console.error('Error registering user:', error);}
        pool.query('SELECT * FROM users WHERE id = ?', [id], (error, results) => {
            if (error) {console.error('Error checking user:', error);}
            delete results[0].password
            res.status(200).json(results[0])
        });
    });
})
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});