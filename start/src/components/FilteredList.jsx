import { useMemo } from "react";

export function FilteredList({ nameList }) {
  const filteredList = useMemo(() => {
    return nameList.filter((user) => user.age > 18);
  }, [nameList]);

  return (
    <>
      <ul>
        {filteredList.map((user) => (
          <li key={user.id}>
            {user.name} - età: {user.age}
          </li>
        ))}
      </ul>
    </>
  );
}
