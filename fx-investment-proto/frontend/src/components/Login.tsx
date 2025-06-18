import React, { useState } from 'react';

interface Props {
  onLogin: (token: string) => void;
}

const Login: React.FC<Props> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('client');

  const submit = async () => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, role })
    });
    const data = await res.json();
    onLogin(data.token);
  };

  return (
    <div>
      <input placeholder="username" value={username} onChange={e => setUsername(e.target.value)} />
      <select value={role} onChange={e => setRole(e.target.value)}>
        <option value="client">Client</option>
        <option value="adviser">Adviser</option>
      </select>
      <button onClick={submit}>Login</button>
    </div>
  );
};

export default Login;
