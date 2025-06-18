import React, { useState } from 'react';
import Converter from './Converter';
import Forecast from './Forecast';
import AuditLog from './AuditLog';

interface Props {
  token: string;
}

const Dashboard: React.FC<Props> = ({ token }) => {
  const [tab, setTab] = useState('convert');

  return (
    <div>
      <nav>
        <button onClick={() => setTab('convert')}>Currency Converter</button>
        <button onClick={() => setTab('forecast')}>Investment Forecast</button>
        <button onClick={() => setTab('audit')}>Audit Log</button>
      </nav>
      {tab === 'convert' && <Converter token={token} />}
      {tab === 'forecast' && <Forecast token={token} />}
      {tab === 'audit' && <AuditLog token={token} />}
    </div>
  );
};

export default Dashboard;
