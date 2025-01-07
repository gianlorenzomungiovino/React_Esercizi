import { useState } from "react";
import { Chat } from "./Chat";

export function InputMessaggio() {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");

  function handleChangeInput(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit() {
    setMessage(inputValue);
    console.log(inputValue);
    setInputValue("");
  }

  <Chat messageSent={message} />;
  return (
    <div>
      <input
        type="text"
        placeholder="inviati"
        value={inputValue}
        onChange={handleChangeInput}
      />
      <button onClick={handleSubmit}>Invia</button>
    </div>
  );
}
