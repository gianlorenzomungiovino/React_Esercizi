// Create an AlertClock function component that renders a button.
// When the button is clicked, an alert should be shown with the current time.
// Render the AlertClock component within the App component. Make it so that the event handler is received as a prop by the AlertClock component, instead of being implemented within the component itself.

import "./App.css";
import { AlertClock } from "./componenti/AlertClock";

function App() {
  const handleShowTime = () => {
    const currentTime = new Date().toLocaleTimeString();
    alert(`Current Time: ${currentTime}`);
  };
  return (
    <>
      <AlertClock handleClick={handleShowTime} />
    </>
  );
}

export default App;
