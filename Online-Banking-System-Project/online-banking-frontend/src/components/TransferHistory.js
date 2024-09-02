import React, { useState, useEffect } from 'react';
import { getTransactionHistory } from '../services/api';

const TransactionHistory = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            const token = localStorage.getItem('token');
            const response = await getTransactionHistory(token);
            setTransactions(response.data);
        };
        fetchTransactions();
    }, []);

    return (
        <div>
            <h2>Transaction History</h2>
            {transactions.map((transaction) => (
                <div key={transaction.TransactionID}>
                    <p>{transaction.TransactionType} - ${transaction.Amount}</p>
                    <p>{transaction.TransactionDate}</p>
                    <p>{transaction.Description}</p>
                </div>
            ))}
        </div>
    );
};

export default TransactionHistory;
