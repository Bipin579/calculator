import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [displayValue, setDisplayValue] = useState("");
  const [currentValue, setCurrentValue] = useState("");
  const [operator, setOperator] = useState("");

  const handleNumberClick = (number) => {
    setDisplayValue((prevDisplayValue) => prevDisplayValue + number);
  };

  const handleOperatorClick = (operator) => {
    if (currentValue !== "") {
      calculate();
    }
    setCurrentValue(displayValue);
    setOperator(operator);
    setDisplayValue("");
  };

  const calculate = () => {
    const prevValue = parseFloat(currentValue);
    const currValue = parseFloat(displayValue);
    let result = 0;

    switch (operator) {
      case "+":
        result = prevValue + currValue;
        break;
      case "-":
        result = prevValue - currValue;
        break;
      case "*":
        result = prevValue * currValue;
        break;
      case "/":
        result = prevValue / currValue;
        break;
      default:
        return;
    }

    setDisplayValue(result.toString());
    setCurrentValue("");
    setOperator("");
  };

  const handleClearClick = () => {
    setDisplayValue("");
    setCurrentValue("");
    setOperator("");
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <input
        className="input-display"
        type="text"
        value={displayValue}
        disabled
      />
      <div className="button-row">
        <button className="button" onClick={() => handleNumberClick("7")}>
          7
        </button>
        <button className="button" onClick={() => handleNumberClick("8")}>
          8
        </button>
        <button className="button" onClick={() => handleNumberClick("9")}>
          9
        </button>
        <button
          className="button operator"
          onClick={() => handleOperatorClick("/")}
        >
          /
        </button>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => handleNumberClick("4")}>
          4
        </button>
        <button className="button" onClick={() => handleNumberClick("5")}>
          5
        </button>
        <button className="button" onClick={() => handleNumberClick("6")}>
          6
        </button>
        <button
          className="button operator"
          onClick={() => handleOperatorClick("*")}
        >
          *
        </button>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => handleNumberClick("1")}>
          1
        </button>
        <button className="button" onClick={() => handleNumberClick("2")}>
          2
        </button>
        <button className="button" onClick={() => handleNumberClick("3")}>
          3
        </button>
        <button
          className="button operator"
          onClick={() => handleOperatorClick("-")}
        >
          -
        </button>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => handleNumberClick("0")}>
          0
        </button>
        <button className="button equal" onClick={calculate}>
          =
        </button>
        <button className="button clear" onClick={handleClearClick}>
          C
        </button>
        <button
          className="button operator"
          onClick={() => handleOperatorClick("+")}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Calculator;
