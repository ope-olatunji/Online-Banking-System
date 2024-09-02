import React, { useState, useEffect } from 'react';
import { getBalance } from '../services/api';

const Dashboard = () => {
    const [balance, setBalance] = useState([]);

    useEffect(() => {
        const fetchBalance = async () => {
            const token = localStorage.getItem('token');
            const response = await getBalance(token);
            setBalance(response.data);
        };
        fetchBalance();
    }, []);

    return (
        <div>
            <h2>Your Accounts</h2>
            {balance.map((account) => (
                <div key={account.AccountID}>
                    <h3>{account.AccountType}</h3>
                    <p>Balance: ${account.Balance}</p>
                </div>
            ))}
        </div>
    );
};

export default Dashboard;
