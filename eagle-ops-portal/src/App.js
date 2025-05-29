import "./App.css";
import React, { useState, useEffect } from "react";
import CommandCoreAiTransmissionComponent from "./components/CommandCoreAiTransmissionComponent";
import CommandCoreAiWeatherComponent from "./components/CommandCoreAiWeatherComponent";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("command-core-weather-report");
  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
  }, [darkMode]);
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <div className="App">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
      <button
        className={activeTab === "command-core-transmission" ? "active" : ""}
        onClick={() => handleTabChange("command-core-transmission")}
      >
        Tactical Transmission
      </button>
      <button
        className={activeTab === "command-core-weather-report" ? "active" : ""}
        onClick={() => handleTabChange("command-core-weather-report")}
      >
        Weather Intel
      </button>
      <div>
        {activeTab === "command-core-weather-report" && (
          <CommandCoreAiWeatherComponent />
        )}
      </div>
      <div>
        {activeTab === "command-core-transmission" && (
          <CommandCoreAiTransmissionComponent />
        )}
      </div>
    </div>
  );
}

export default App;
