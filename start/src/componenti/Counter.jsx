import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ initialValue, decrementValue }) {
  const [counter, setCounter] = useState(initialValue);

  function handleIncrementa() {
    setCounter((x) => x + 1);
  }

  function handleDecrementa() {
    setCounter((x) => x - decrementValue);
  }

  function handleReset() {
    setCounter(initialValue);
  }

  return (
    <div className="counter-container">
      <h2>Contatore</h2>
      <button onClick={handleIncrementa}>Incrementa</button>
      <button onClick={handleDecrementa}>Decrementa</button>
      <button onClick={handleReset}>Reset</button>
      <CounterDisplay count={counter} />
    </div>
  );
}
