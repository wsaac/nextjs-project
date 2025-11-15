'use client';
import { useState } from 'react';

export default function Counter({ incrementBy = 1, buttonColor = 'blue' }) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    const newCount = count + incrementBy;
    if (newCount > 10) {
      setCount(0);
    } else {
      setCount(newCount);
    }
  };

  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc' }}>
      <h3>Counter (Increment by {incrementBy})</h3>
      <p>Current Count: {count}</p>
      <button 
        onClick={handleIncrement}
        style={{
          backgroundColor: buttonColor,
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Increment by {incrementBy}
      </button>
    </div>
  );
}