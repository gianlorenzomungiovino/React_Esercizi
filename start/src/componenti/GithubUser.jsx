import { useState } from "react";
import { useSwr } from "../hooks/useSwr";

export function GithubUser() {
  const [username, setUsername] = useState("");
  const [searchedUser, setSearchedUser] = useState("");

  const { data, error, isLoading, handleRefreshData } = useSwr(searchedUser);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchedUser(username);
  };

  return (
    <>
      <h2>Github User Finder:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(typing) => setUsername(typing.target.value.trim())}
        />
        <button type="submit">Search</button>
        <button onClick={handleRefreshData}>Refresh</button>
      </form>
      <div>
        {isLoading && <h3>Loading...</h3>}
        {error && <p>{error}</p>}
        {data && (
          <>
            <h2>{data.name}</h2>
            <h3>{data.login}</h3>
            <img src={data.avatar_url} alt={data.login} width="100" />
          </>
        )}
      </div>
    </>
  );
}
