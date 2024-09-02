-- Insert synthetic data into AccountTypes
INSERT INTO AccountTypes (AccountTypeName) VALUES ('Savings'), ('Checking');

-- Insert synthetic data into Users
INSERT INTO Users (FullName, Email, Phone, Address, DateOfBirth, PasswordHash)
VALUES 
('Alice Johnson', 'alice@example.com', '123-456-7890', '123 Maple Street', '1985-04-12', 'hashedpassword1'),
('Bob Smith', 'bob@example.com', '234-567-8901', '456 Oak Avenue', '1990-06-23', 'hashedpassword2'),
('Charlie Brown', 'charlie@example.com', '345-678-9012', '789 Pine Road', '1978-09-15', 'hashedpassword3');

-- Insert synthetic data into Accounts
INSERT INTO Accounts (UserID, AccountTypeID, Balance)
VALUES 
(1, 1, 1500.00), -- Alice's Savings Account
(1, 2, 500.00),  -- Alice's Checking Account
(2, 1, 2000.00), -- Bob's Savings Account
(3, 2, 300.00);  -- Charlie's Checking Account

-- Insert synthetic data into Transactions
INSERT INTO Transactions (AccountID, TransactionType, Amount, Description)
VALUES 
(1, 'Deposit', 1000.00, 'Initial deposit'),          -- Alice's Savings
(1, 'Withdrawal', 200.00, 'ATM withdrawal'),         -- Alice's Savings
(2, 'Deposit', 500.00, 'Direct deposit paycheck'),   -- Alice's Checking
(3, 'Transfer', 250.00, 'Transfer to checking'),     -- Bob's Savings to Checking
(4, 'Withdrawal', 100.00, 'POS Purchase - Groceries'); -- Charlie's Checking

-- Insert synthetic data into UserRoles
INSERT INTO UserRoles (RoleName)
VALUES ('Admin'), ('User');

-- Insert synthetic data into UserRoleAssignments
INSERT INTO UserRoleAssignments (UserID, RoleID)
VALUES 
(1, 1),  -- Alice is an Admin
(2, 2),  -- Bob is a User
(3, 2);  -- Charlie is a User

-- Insert synthetic data into AuditLogs
INSERT INTO AuditLogs (UserID, Action, IP)
VALUES 
(1, 'Logged in', '192.168.1.10'),
(1, 'Viewed account balance', '192.168.1.10'),
(2, 'Transferred funds', '192.168.1.11'),
(3, 'Logged out', '192.168.1.12');
