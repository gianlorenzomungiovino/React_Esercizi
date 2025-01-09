import { useEffect, useState } from "react";

export function useGithubUser(username) {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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

  return {
    user: user,
    error: error,
    loading: loading,
  };
}
