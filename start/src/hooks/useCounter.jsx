import { useCallback, useState } from "react";

export function useCounter() {
  const [counter, setCounter] = useState(0);

  const onIncrement = useCallback(() => {
    setCounter((n) => n + 1);
  }, []);

  const onDecrement = useCallback(() => {
    setCounter((n) => n - 1);
  }, []);

  const onReset = useCallback(() => {
    setCounter(0);
  }, []);

  return {
    counter,
    onIncrement,
    onDecrement,
    onReset,
  };
}
