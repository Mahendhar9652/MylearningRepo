import React, { useState } from 'react';
import './Cal.css';

const Cal = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    if(value==='AC'){
      setInput("")
    }else if(value==="DE"){
      setInput(input.slice(0,-1))
    }else if(value==="="){
      var result = eval(input);
      setInput(result)
        }
    else{
    setInput(input+value);
  }
}

  return (
    <>
      <center>
        <div className='main'>
          <div className='display'>
          <h1>Calculator</h1>
          <hr></hr>
            <input type='text' value={input} />
          </div>
          <div className='buttons'>
            <div className='row'>
              <button onClick={() => handleButtonClick("AC")}>AC</button>
              <button onClick={() => handleButtonClick("DE")}>DE</button>
              <button onClick={() => handleButtonClick("=")}>=</button>
              <button className='opp' onClick={() => handleButtonClick("%")}>%</button>
            </div>
            <div className='row'>
              <button onClick={() => handleButtonClick("9")}>9</button>
              <button onClick={() => handleButtonClick("8")}>8</button>
              <button onClick={() => handleButtonClick("7")}>7</button>
              <button className='opp' onClick={() => handleButtonClick("+")}>+</button>
            </div>
            <div className='row'>
              <button onClick={() => handleButtonClick("6")}>6</button>
              <button onClick={() => handleButtonClick("5")}>5</button>
              <button onClick={() => handleButtonClick("4")}>4</button>
              <button className='opp' onClick={() => handleButtonClick("-")}>-</button>
            </div>
            <div className='row'>
              <button onClick={() => handleButtonClick("3")}>3</button>
              <button onClick={() => handleButtonClick("2")}>2</button>
              <button onClick={() => handleButtonClick("1")}>1</button>
              <button className='opp' onClick={() => handleButtonClick("*")}>*</button>
            </div>
            <div className='row'>
              <button onClick={() => handleButtonClick("0")}>0</button>
              <button onClick={() => handleButtonClick("00")}>00</button>
              <button onClick={() => handleButtonClick("000")}>000</button>
              <button className='opp' onClick={() => handleButtonClick("/")}>/</button>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}

export default Cal;


/*import React, { useState } from 'react';

function Calculator() {
  const [displayValue, setDisplayValue] = useState("0");

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+", "C"
  ];

  const handleClick = (value) => {
    if (value === "C") {
      setDisplayValue("0");
    } else if (displayValue === "0") {
      setDisplayValue(value);
    } else {
      setDisplayValue(displayValue + value);
    }
  }

  return (
    <div>
      <h1>Calculator</h1>
      <div className="display">{displayValue}</div>
      <div className="buttons">
        {buttons.map(button => (
          <button key={button} onClick={() => handleClick(button)}>{button}</button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
*/ 