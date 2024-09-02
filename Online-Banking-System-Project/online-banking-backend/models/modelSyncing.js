const User = require('./models/User');
const Account = require('./models/Account');
const Transaction = require('./models/Transaction');

// Associations
User.hasMany(Account, { foreignKey: 'UserID' });
Account.belongsTo(User, { foreignKey: 'UserID' });

Account.hasMany(Transaction, { foreignKey: 'AccountID' });
Transaction.belongsTo(Account, { foreignKey: 'AccountID' });

// Sync models with database
sequelize.sync({ alter: true })
    .then(() => console.log('Models synchronized with database'))
    .catch(err => console.log('Error syncing models: ' + err));
