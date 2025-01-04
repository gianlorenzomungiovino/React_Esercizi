import { useEffect, useRef } from "react";
import { useChatContext } from "./ChatContext";

export function Chat() {
  const { messages } = useChatContext();
  const chatBoxRef = useRef(null);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div ref={chatBoxRef} className="msg-box">
      {messages.map((msg, index) => (
        <span
          key={index}
          style={{
            display: "inline-block",
            flexDirection: "column",
            color: "black",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            border: "1px black",
            borderRadius: "7px",
            maxWidth: "66%",
            padding: "2px 15px",
            marginBottom: "1.5rem",
            backgroundColor: msg.sender === "user" ? "white" : "lightgreen",
            alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
            // marginLeft: msg.sender === "user" ? "auto" : "0",
            // marginRight: msg.sender === "user" ? "0" : "auto",
            wordWrap: "break-word",
            textAlign: "left",
          }}
        >
          {msg.content}
        </span>
      ))}
    </div>
  );
}
