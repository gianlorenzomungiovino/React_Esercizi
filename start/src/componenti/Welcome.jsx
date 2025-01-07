import { Age } from "./age";

/* eslint-disable react/prop-types */
export function Welcome({ name, age }) {
  return (
    <>
      <p>
        Welcome, <strong>{name}!</strong>
      </p>
      <Age age={age} />
    </>
  );
}
