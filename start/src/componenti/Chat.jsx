export function Chat({ messages, risposte }) {
  const messaggio = [...messages, ...risposte];
  return (
    <div style={{ height: "460px" }}>
      {messaggio.map((item, index) => (
        <span
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            color: "black",
            boxShadow: "0 0 5px",
            border: "1px black",
            borderRadius: "10px",
            maxWidth: "50%",
            padding: "2px",
            backgroundColor: messages.includes(item) ? "white" : "green",
            // alignSelf: messages.includes(item) ? "flex-end" : "flex-start",
            marginLeft: messages.includes(item) ? "auto" : "0",
            marginRight: messages.includes(item) ? "0" : "auto",
          }}
        >
          {item}
        </span>
      ))}
    </div>
  );
}
