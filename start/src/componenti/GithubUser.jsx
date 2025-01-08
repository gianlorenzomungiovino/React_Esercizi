import { useState } from "react";
import { useEffect } from "react";

function GithubUser({ username }) {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  {
    useEffect(() => {
      const fetchFunction = async (username) => {
        try {
          setLoading(true);
          const response = await fetch(
            `https://api.github.com/users/${username}`
          );
          if (response.status !== 200) {
            throw new Error("Errore nel fetching dei dati");
          }
          const data = await response.json();
          setUser(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      fetchFunction(username);
    }, [username]);
  }
  return (
    <>
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

export default GithubUser;
