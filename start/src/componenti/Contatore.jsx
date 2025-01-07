import { useEffect, useState } from "react";

export function Contatore({ valoreIniziale }) {
  const [counter, setCounter] = useState(valoreIniziale);

  useEffect(() => {
    console.log(`Valore del contatore: ${counter}`);
  }, [counter]);

  function handleIncrement() {
    setCounter((value) => value + 1);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={handleIncrement}>Incrementa</button>
    </div>
  );
}
