import { Message } from "./message";
import { Age } from "./age";

/* eslint-disable react/prop-types */
export function Welcome({ name, age }) {
  return (
    <>
      <p>Welcome, {name} </p>
      {age > 18 && <Age age={age} />}
      {!!age && <Age age={age} />}
      {age > 18 && age < 65 && <Age age={age} />}
      {age > 18 && name === "John" && <Age age={age} />}
      <Message age={age} />
    </>
  );
}
