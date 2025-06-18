import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

interface Props {
  token: string;
}

const Forecast: React.FC<Props> = ({ token }) => {
  const [amount, setAmount] = useState(1000);
  const [years, setYears] = useState(1);
  const [risk, setRisk] = useState('medium');
  const [data, setData] = useState<any>(null);

  const run = async () => {
    const res = await fetch('/api/invest/forecast', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ amount, years, riskLevel: risk })
    });
    const d = await res.json();
    setData([
      { name: 'Min', value: d.min },
      { name: 'Likely', value: d.likely },
      { name: 'Max', value: d.max }
    ]);
  };

  return (
    <div>
      <input type="number" value={amount} onChange={e => setAmount(parseFloat(e.target.value))} />
      <select value={years} onChange={e => setYears(parseInt(e.target.value))}>
        <option value={1}>1</option>
        <option value={5}>5</option>
        <option value={10}>10</option>
      </select>
      <select value={risk} onChange={e => setRisk(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={run}>Forecast</button>
      {data && (
        <LineChart width={300} height={200} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      )}
    </div>
  );
};

export default Forecast;
