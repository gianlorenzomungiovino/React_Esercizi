// Create a React application that simulates a simple chat interface. The application should display a list of messages where each message appears as a speech bubble aligned to the right or left, depending on whether the message was sent or received.

import { useState } from "react";
import "./App.css";
import { Chat } from "./componenti/Chat";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);

  function handleChangeInput(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit() {
    if (inputValue) {
      setMessages([...messages, inputValue]);
      console.log(inputValue);
      setInputValue("");
    }
  }

  const risposte = [
    "Ciao",
    "Come stai?",
    "Tutto bene, grazie e tu?",
    "anche io bene, grazie per aver chiesto",
  ];

  const [risposteRenderizzate, setRisposteRenderizzate] = useState([]);

  function handleRisposte() {
    setTimeout(() => {
      const rispostaSuccessiva =
        risposte[risposteRenderizzate.length % risposte.length];
      setRisposteRenderizzate([...risposteRenderizzate, rispostaSuccessiva]);
    }, 2500);
  }

  return (
    <>
      <div>
        <div className="chat-box">
          <Chat messages={messages} risposte={risposteRenderizzate} />
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="scrivi..."
            value={inputValue}
            onChange={handleChangeInput}
          />
          <button
            onClick={() => {
              handleSubmit(), handleRisposte();
            }}
          >
            Invia
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
