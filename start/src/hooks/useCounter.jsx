import { useState } from "react";

export function useCounter() {
  const [counter, setCounter] = useState(0);

  function handleCounterIncrement() {
    setCounter((n) => n + 1);
  }

  function handleCounterDecrement() {
    setCounter((n) => n - 1);
  }

  function handleCounterReset() {
    setCounter(0);
  }

  return {
    counter: counter,
    onIncrement: handleCounterIncrement,
    onDecrement: handleCounterDecrement,
    onReset: handleCounterReset,
  };
}
