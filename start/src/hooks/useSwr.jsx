import useSWR from "swr";

export function useSwr(username) {
  const { data, error, isLoading, mutate } = useSWR(
    `https://api.github.com/users/${username}`
  );

  function handleRefreshData() {
    mutate();
  }

  return { data, error, isLoading, handleRefreshData };
}
