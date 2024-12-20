// Create a custom hook useCounter that keeps track of the state of a counter, and returns the current value of the counter as well as three functions to increment, decrement and reset the counter. Use the useCallback to memoize the functions used to increment, decrement and reset the counter.
// Create a FilteredList component that receives a list of objects each containing a name, an id and a age prop. The FilteredList component should render only the items of the list whose age is greater than 18, and the filtering should only happen when the list changes. Use useMemo to memoize the filtered list.

import "./App.css";
import { Counter } from "./components/Counter";
import { FilteredList } from "./components/FilteredList";

function App() {
  const arrNomi = [
    { name: "Massimo", id: 1, age: 24 },
    { name: "Samuele", id: 2, age: 31 },
    { name: "Laura", id: 3, age: 17 },
    { name: "Simona", id: 4, age: 14 },
  ];

  return (
    <>
      <Counter />
      <hr />
      <FilteredList nameList={arrNomi} />
    </>
  );
}

export default App;
