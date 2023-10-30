import Login from "./components/Login.jsx";
import { useState } from "react";
import Weather from "./components/Weather.jsx";

const App = () => {
  const [position, setPosition] = useState({});
  return (
    <div className="h-screen font-poppins">
      {Object.keys(position).length === 0 ? (
        <Login setPosition={setPosition} />
      ) : (
        <Weather position={position} />
      )}
    </div>
  );
};

export default App;
