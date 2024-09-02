const db = require('../config/db');

exports.transferFunds = (req, res) => {
    const { fromAccountId, toAccountId, amount } = req.body;

    db.query('START TRANSACTION', (err) => {
        if (err) return res.status(500).json({ error: err });

        // Deduct from the sender's account
        db.query('UPDATE Accounts SET Balance = Balance - ? WHERE AccountID = ? AND Balance >= ?', 
        [amount, fromAccountId, amount], 
        (err, results) => {
            if (err || results.affectedRows === 0) {
                db.query('ROLLBACK');
                return res.status(400).json({ error: 'Insufficient funds or invalid account!' });
            }

            // Credit the receiver's account
            db.query('UPDATE Accounts SET Balance = Balance + ? WHERE AccountID = ?', 
            [amount, toAccountId], 
            (err, results) => {
                if (err) {
                    db.query('ROLLBACK');
                    return res.status(500).json({ error: err });
                }

                db.query('COMMIT');
                res.json({ message: 'Transfer successful!' });
            });
        });
    });
};
