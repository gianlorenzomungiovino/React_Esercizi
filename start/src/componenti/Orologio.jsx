import { useEffect, useState } from "react";

export function Orologio() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const clock = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(clock);
    };
  }, []);

  return (
    <div>
      <h2>Ora attuale: {date.toLocaleTimeString()}</h2>
    </div>
  );
}
