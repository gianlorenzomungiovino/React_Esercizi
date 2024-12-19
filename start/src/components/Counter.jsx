import { useCounter } from "../hooks/useCounter";

export function Counter() {
  const { counter, onIncrement, onDecrement, onReset } = useCounter();

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
