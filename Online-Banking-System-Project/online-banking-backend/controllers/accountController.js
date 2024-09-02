const db = require('../config/db');

exports.getBalance = (req, res) => {
    const userId = req.userId; // Extracted from JWT
    db.query('SELECT * FROM Accounts WHERE UserID = ?', [userId], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
};
