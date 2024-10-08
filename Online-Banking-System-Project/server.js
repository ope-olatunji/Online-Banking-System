const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const accountRoutes = require('./routes/accountRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/account', accountRoutes);
app.use('/transaction', transactionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
