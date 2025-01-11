// Modify the chat application so that the bot obtains its responses from an external endpoint using the SWR library to manage network calls. Use the mocki.io service to create a mock for your network call!

// Requirements: When the user sends a message, use SWR to make a request to the provided endpoint and obtain the bot's response.

import "./App.css";
import { Chat } from "./componenti/Chat";
import { ChatProvider } from "./componenti/ChatContext";
import { InputBox } from "./componenti/InputBox";

function App() {
  return (
    <ChatProvider>
      <div className="chat-box">
        <Chat />
      </div>
      <div className="input-box">
        <InputBox />
      </div>
    </ChatProvider>
  );
}

export default App;
