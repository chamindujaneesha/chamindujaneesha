import React, { useEffect, useState } from 'react';

interface Props {
  token: string;
}

const AuditLog: React.FC<Props> = ({ token }) => {
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/audit', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => res.json())
      .then(setLogs);
  }, [token]);

  return (
    <ul>
      {logs.map(l => <li key={l.id}>{l.action} - {l.username} - {l.ts}</li>)}
    </ul>
  );
};

export default AuditLog;
