import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <input
        type="text"
        value={input}
        placeholder="Enter an expression"
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="buttons">
        {[7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 'C', 0, '=', '+'].map((value, index) => (
          <button key={index} onClick={() => handleClick(value)}>
            {value}
          </button>
        ))}
      </div>
      <div className="result">
        <span>{result}</span>
      </div>
    </div>
  );
}

export default App;