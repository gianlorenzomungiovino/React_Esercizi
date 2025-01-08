import { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function GithubUserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://api.github.com/users");
        if (!response.ok) {
          throw new Error("Errore nel recupero dei dati");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <Outlet />
      <h1>Elenco Utenti GitHub</h1>
      {loading && <p>Caricamento...</p>}
      {error && <p>Errore: {error}</p>}
      {!loading && !error && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={user.login}>{user.login}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GithubUserList;
