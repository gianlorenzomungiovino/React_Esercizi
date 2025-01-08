import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  function handleIncrementa() {
    setCounter((x) => x + 1);
  }

  function handleDecrementa() {
    setCounter((x) => x - 1);
  }

  function handleReset() {
    setCounter(0);
  }

  return (
    <div className="counter-container">
      <h2>Contatore</h2>
      <button onClick={handleIncrementa}>Incrementa</button>
      <button onClick={handleDecrementa}>Decrementa</button>
      <button onClick={handleReset}>Reset</button>
      {counter}
    </div>
  );
}
