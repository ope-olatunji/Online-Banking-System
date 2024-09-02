const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
    UserID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    FullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    Phone: {
        type: DataTypes.STRING
    },
    Address: {
        type: DataTypes.TEXT
    },
    DateOfBirth: {
        type: DataTypes.DATE
    },
    PasswordHash: {
        type: DataTypes.STRING,
        allowNull: false
    },
    CreatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: false,
    tableName: 'Users'
});

module.exports = User;
