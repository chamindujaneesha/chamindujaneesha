import React, { useState } from 'react';

interface Props {
  token: string;
}

const currencies = ['GBP', 'USD', 'EUR', 'BRL', 'JPY', 'TRY'];

const Converter: React.FC<Props> = ({ token }) => {
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState<number | null>(null);

  const convert = async () => {
    const res = await fetch(`/api/fx/convert?from=${from}&to=${to}&amount=${amount}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    setResult(data.result);
  };

  return (
    <div>
      <select value={from} onChange={e => setFrom(e.target.value)}>
        {currencies.map(c => <option key={c}>{c}</option>)}
      </select>
      <select value={to} onChange={e => setTo(e.target.value)}>
        {currencies.map(c => <option key={c}>{c}</option>)}
      </select>
      <input type="number" value={amount} onChange={e => setAmount(parseFloat(e.target.value))} />
      <button onClick={convert}>Convert</button>
      {result !== null && <div>{result}</div>}
    </div>
  );
};

export default Converter;
