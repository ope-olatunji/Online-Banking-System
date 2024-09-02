import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Transfer from './components/Transfer';
import TransactionHistory from './components/TransactionHistory';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/transfer" component={Transfer} />
          <Route path="/transactions" component={TransactionHistory} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
