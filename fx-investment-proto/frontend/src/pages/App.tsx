import React, { useState } from 'react';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';

const App: React.FC = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  return token ? (
    <Dashboard token={token} />
  ) : (
    <Login onLogin={(t) => { localStorage.setItem('token', t); setToken(t); }} />
  );
};

export default App;
