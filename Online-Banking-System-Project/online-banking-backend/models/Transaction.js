const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Account = require('./Account');

const Transaction = sequelize.define('Transaction', {
    TransactionID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    AccountID: {
        type: DataTypes.INTEGER,
        references: {
            model: Account,
            key: 'AccountID'
        }
    },
    TransactionType: {
        type: DataTypes.ENUM('Deposit', 'Withdrawal', 'Transfer'),
        allowNull: false
    },
    Amount: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false
    },
    TransactionDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    Description: {
        type: DataTypes.TEXT
    }
}, {
    timestamps: false,
    tableName: 'Transactions'
});

module.exports = Transaction;
