const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../config/db');

exports.register = (req, res) => {
    const { fullName, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    db.query('INSERT INTO Users (FullName, Email, PasswordHash) VALUES (?, ?, ?)', 
    [fullName, email, hashedPassword], 
    (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ message: 'User registered successfully!' });
    });
};

exports.login = (req, res) => {
    const { email, password } = req.body;

    db.query('SELECT * FROM Users WHERE Email = ?', [email], (err, results) => {
        if (err || results.length === 0) return res.status(401).json({ error: 'Authentication failed!' });

        const user = results[0];
        if (bcrypt.compareSync(password, user.PasswordHash)) {
            const token = jwt.sign({ userId: user.UserID }, 'secretkey', { expiresIn: '1h' });
            res.json({ token });
        } else {
            res.status(401).json({ error: 'Authentication failed!' });
        }
    });
};


const { hashPassword } = require('../utils/encryption');

exports.register = async (req, res) => {
    const { fullName, email, password } = req.body;

    try {
        const hashedPassword = await hashPassword(password);
        // Save user to the database with hashedPassword
    } catch (error) {
        res.status(500).json({ error: 'Error during registration' });
    }
};
