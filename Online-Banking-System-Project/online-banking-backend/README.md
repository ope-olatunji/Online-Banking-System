# Online Banking System - Backend

## Overview
This is the backend of the Online Banking System, built using Node.js, Express, and MySQL. It handles user authentication, account management, and transaction processing.

## Directory Structure
/online-banking-system/online-banking-backend
│
├── /config/                 # Configuration files (e.g., database connection)
│   └── db.js                # Sets up and exports the Sequelize connection to MySQL
│
├── /controllers/            # Handles business logic and API endpoints
│   └── authController.js    # Manages user registration and login
│   └── accountController.js # Handles account-related operations (balance check, etc.)
│   └── transactionController.js # Manages transactions (transfers, deposits, etc.)
│
├── /models/                 # Defines the database models
│   └── User.js              # User model definition
│   └── Account.js           # Account model definition
│   └── Transaction.js       # Transaction model definition
│
├── /routes/                 # API route definitions
│   └── authRoutes.js        # Routes for authentication endpoints
│   └── accountRoutes.js     # Routes for account management endpoints
│   └── transactionRoutes.js # Routes for transaction handling endpoints
│
├── /middleware/             # Middleware functions
│   └── authMiddleware.js    # Middleware to verify JWT tokens
│
├── /utils/                  # Utility functions
│   └── encryption.js        # Functions for password hashing and data encryption
│
├── server.js                # Main server file that initializes the Express app
├── package.json             # Node.js dependencies and scripts
└── README.md                # This file
