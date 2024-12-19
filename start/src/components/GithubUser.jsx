import { useState } from "react";
import { useGithubUser } from "../hooks/useGithubUser";

export function GithubUser() {
  const [username, setUsername] = useState("");
  const [submittedUsername, setSubmittedUsername] = useState("");

  const { user, error, loading } = useGithubUser(submittedUsername);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedUsername(username);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(type) => setUsername(type.target.value.trim())}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {loading && <p>Caricamento dati in corso...</p>}
        {error && <p>{error}</p>}
        <h2>{user.name}</h2>
        <h3>{user.login}</h3>
        <img src={user.avatar_url} alt={user.login} width="100" />
      </div>
    </>
  );
}
