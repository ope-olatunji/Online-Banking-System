Frontend Root Directory README (online-banking-frontend/README.md):**

# Online Banking System - Frontend

## Overview
This is the frontend of the Online Banking System, built using React.js. It allows users to interact with the banking system, including registration, login, viewing account balances, and transferring funds.

## Directory Structure

online-banking-system/online-banking-frontend/
│
├── /public/                 # Public files, including the main HTML template
│   └── index.html           # Entry point for the React application
│
├── /src/                    # Source files for the React application
│   ├── /components/         # React components for various parts of the app
│   │   ├── Login.js         # Login form component
│   │   ├── Register.js      # User registration form component
│   │   ├── Dashboard.js     # User dashboard showing account information
│   │   ├── Transfer.js      # Form for transferring funds between accounts
│   │   └── TransactionHistory.js # Displays the user's transaction history
│   │
│   ├── /services/           # API service to interact with the backend
│   │   └── api.js           # Contains functions to call backend API endpoints
│   │
│   ├── App.js               # Main React component that sets up routing
│   ├── index.js             # Entry point for React, rendering the App component
│   └── styles.css           # Basic styling for the application
│
├── package.json             # React dependencies and scripts
└── README.md                # This file
