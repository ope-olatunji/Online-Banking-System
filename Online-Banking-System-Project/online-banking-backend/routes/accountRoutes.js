const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/balance', authMiddleware.verifyToken, accountController.getBalance);

module.exports = router;
