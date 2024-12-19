import { useState } from "react";

export function useForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSetUsername(event) {
    const value = event.target.value;
    setUsername(value);
  }

  function handleSetPassword(event) {
    const value = event.target.value;
    setPassword(value);
  }

  return {
    username: username,
    password: password,
    onSetUsername: handleSetUsername,
    onSetPassword: handleSetPassword,
  };
}
