import { useState } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  // update state to display correct result
  const [result, setResult] = useState("");

  // handle click event on each button on calculator
  const handleClick = (e) => {
    // use function to update state
    setResult(result.concat(e.target.value));
  };

  // clear result
  const clear = (e) => {
    setResult("");
  };

  // backspace
  const backspace = (e) => {
    setResult(result.slice(0, result.length - 1)); // or 0, -1
  };

  // calculate the result
  const calculate = () => {
    try {
      setResult(eval(result));
    } catch {
      setResult("Invalid Input");
    }
  };

  return (
    <div className="calculator-grid">
      <input className="output" type="text" value={result}></input>

      <button onClick={clear} className="span-two">
        C
      </button>
      <button onClick={backspace}>DEL</button>
      <button value="/" onClick={handleClick}>
        /
      </button>
      <button value="1" onClick={handleClick}>
        1
      </button>
      <button value="2" onClick={handleClick}>
        2
      </button>
      <button value="3" onClick={handleClick}>
        3
      </button>
      <button value="*" onClick={handleClick}>
        *
      </button>
      <button value="4" onClick={handleClick}>
        4
      </button>
      <button value="5" onClick={handleClick}>
        5
      </button>
      <button value="6" onClick={handleClick}>
        6
      </button>
      <button value="+" onClick={handleClick}>
        +
      </button>
      <button value="7" onClick={handleClick}>
        7
      </button>
      <button value="8" onClick={handleClick}>
        8
      </button>
      <button value="9" onClick={handleClick}>
        9
      </button>
      <button value="-" onClick={handleClick}>
        -
      </button>
      <button value="." onClick={handleClick}>
        .
      </button>
      <button value="0" onClick={handleClick}>
        0
      </button>
      <button onClick={calculate} className="span-two">
        =
      </button>
    </div>
  );
};

// get div with ID root, create container, render App
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
