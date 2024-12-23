import { useState } from "react";
import { useChatContext } from "./ChatContext";

export function InputBox() {
  const { addMessage } = useChatContext();
  const [inputValue, setInputValue] = useState("");

  const risposteBot = [
    "Ciao",
    "Come stai?",
    "Tutto bene, grazie e tu?",
    "anche io bene, grazie per aver chiesto",
    "Spero che tu stia avendo una giornata fantastica! 😊",
    "Ah, è sempre bello parlare con te!",
    "Suona davvero interessante!",
    "Mi piace il tuo entusiasmo!",
    "Hai bisogno di qualcosa di specifico?",
    "Ciao! Come posso aiutarti oggi?",
    "Interessante, raccontami di più!",
    "Non sono sicuro di aver capito, potresti ripetere?",
    "Che bello sentirti!",
    "Grazie per aver condiviso!",
  ];

  function handleSubmit() {
    const cleanInput = inputValue.trim();

    if (cleanInput) {
      addMessage(cleanInput, "user");
      setInputValue("");

      const randomDelay = Math.random() * (6000 - 2000) + 2000;
      setTimeout(() => {
        const rispostaSuccessiva =
          risposteBot[Math.floor(Math.random() * risposteBot.length)];
        addMessage(rispostaSuccessiva, "bot");
      }, randomDelay);
    }
  }

  return (
    <>
      <input
        className="input-text"
        type="text"
        placeholder="Messaggio"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={handleSubmit}>
        <img
          src="\send-message-svgrepo-com.svg"
          alt="Invio"
          style={{ filter: "invert(100%)" }}
        />
      </button>
    </>
  );
}
