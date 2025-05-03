import React, { useState } from "react";
import { evaluate } from "mathjs";
import './Calculator.css'

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        const result = evaluate(input)
        setInput(result.toString()); 
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+"
  ];

  return (
    <div className="calculator-container">
      <input type="text" value={input} readOnly className="calculator-display" />
      <div className="calculator-buttons">
        <button className="clear" onClick={() => handleClick("C")}>Clear</button>
        {buttons.map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
