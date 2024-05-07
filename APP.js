import React, { useState } from 'react';

const FactorialCalculator = () => {
  const [number, setNumber] = useState('');
  const [factorial, setFactorial] = useState(null);

  const calculateFactorial = () => {
    const num = parseInt(number);
    if (isNaN(num)) {
      setFactorial(null);
      return;
    }

    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    setFactorial(result);
  };

  return (
    <div>
      <h2>Factorial Calculator</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={calculateFactorial}>Calculate Factorial</button>
      {factorial !== null && (
        <p>
          The factorial of {number} is {factorial}
        </p>
      )}
    </div>
  );
};

export default FactorialCalculator;
