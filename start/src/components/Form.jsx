import { useForm } from "../hooks/useForm";

export function Form() {
  const { username, password, onSetUsername, onSetPassword } = useForm();

  return (
    <form>
      <label for="username">Username:</label>
      <input
        type="text"
        id="username"
        placeholder="type username"
        value={username}
        onChange={onSetUsername}
      />
      <label for="password">Password:</label>
      <input
        type="text"
        id="password"
        placeholder="type password"
        value={password}
        onChange={onSetPassword}
      />
    </form>
  );
}
