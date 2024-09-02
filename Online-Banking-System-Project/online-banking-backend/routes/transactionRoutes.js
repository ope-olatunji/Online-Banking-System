const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/transfer', authMiddleware.verifyToken, transactionController.transferFunds);

module.exports = router;
