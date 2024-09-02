import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const registerUser = (userData) => {
    return axios.post(`${API_URL}/auth/register`, userData);
};

export const loginUser = (credentials) => {
    return axios.post(`${API_URL}/auth/login`, credentials);
};

export const getBalance = (token) => {
    return axios.get(`${API_URL}/account/balance`, {
        headers: { Authorization: token }
    });
};

export const transferFunds = (token, transferData) => {
    return axios.post(`${API_URL}/transaction/transfer`, transferData, {
        headers: { Authorization: token }
    });
};

export const getTransactionHistory = (token) => {
    return axios.get(`${API_URL}/account/transactions`, {
        headers: { Authorization: token }
    });
};
