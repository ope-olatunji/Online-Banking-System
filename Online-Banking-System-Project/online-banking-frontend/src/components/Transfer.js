import React, { useState } from 'react';
import { transferFunds } from '../services/api';

const Transfer = () => {
    const [fromAccountId, setFromAccountId] = useState('');
    const [toAccountId, setToAccountId] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await transferFunds(token, { fromAccountId, toAccountId, amount });
            alert('Transfer successful!');
        } catch (error) {
            alert('Transfer failed!');
        }
    };

    return (
        <div>
            <h2>Transfer Funds</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={fromAccountId} onChange={(e) => setFromAccountId(e.target.value)} placeholder="From Account ID" required />
                <input type="text" value={toAccountId} onChange={(e) => setToAccountId(e.target.value)} placeholder="To Account ID" required />
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
                <button type="submit">Transfer</button>
            </form>
        </div>
    );
};

export default Transfer;
