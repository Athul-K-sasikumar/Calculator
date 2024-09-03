import React, { useState } from 'react';

const Calc = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div style={{ background: "#141E46", margin: '40px 30px', justifyContent: 'center', padding: '20px', fontSize: '30px' }} className='row'>
      
      {/* Display area */}
      <div style={{ color: 'white', fontSize: '24px', padding: '10px', backgroundColor: 'greeen', marginBottom: '20px' }}>
        {input}
      </div>

      {/* Calculator buttons */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', color: '#E1F7F5' }}>
        <button onClick={() => handleButtonClick('7')} className='btn text-light pb-2 fw-bold'>7</button>
        <button onClick={() => handleButtonClick('8')} className='btn text-light pb-2 fw-bold'>8</button>
        <button onClick={() => handleButtonClick('9')} className='btn text-light pb-2 fw-bold'>9</button>
        <button onClick={() => handleButtonClick('/')} className='btn text-light pb-2 fw-bold'>/</button>
        <button onClick={() => handleButtonClick('4')} className='btn text-light pb-2 fw-bold'>4</button>
        <button onClick={() => handleButtonClick('5')} className='btn text-light pb-2 fw-bold'>5</button>
        <button onClick={() => handleButtonClick('6')} className='btn text-light pb-2 fw-bold'>6</button>
        <button onClick={() => handleButtonClick('*')} className='btn text-light pb-2 fw-bold'>*</button>
        <button onClick={() => handleButtonClick('1')} className='btn text-light pb-2 fw-bold'>1</button>
        <button onClick={() => handleButtonClick('2')} className='btn text-light pb-2 fw-bold'>2</button>
        <button onClick={() => handleButtonClick('3')} className='btn text-light pb-2 fw-bold'>3</button>
        <button onClick={() => handleButtonClick('-')} className='btn text-light pb-2 fw-bold'>-</button>
        <button onClick={() => handleButtonClick('0')} className='btn text-light pb-2 fw-bold'>0</button>
        <button onClick={() => handleButtonClick('.')} className='btn text-light pb-2 fw-bold'>.</button>
        
        <button onClick={() => handleButtonClick('+')} className='btn text-light pb-2 fw-bold'>+</button>
        <button onClick={handleCalculate} className='btn text-light pb-2 fw-bold'>=</button>
        <button onClick={handleClear}  className='btn text-light pb-2 fw-bold col-4 '>CLear</button>
      </div>
    </div>
  );
};

export default Calc;
