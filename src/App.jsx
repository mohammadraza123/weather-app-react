import "./App.css";
import Weather from "./Components/Weather";
import { registerSW } from "virtual:pwa-register";

function App() {
  registerSW();
  return (
    <>
      <Weather />
    </>
  );
}

export default App;
