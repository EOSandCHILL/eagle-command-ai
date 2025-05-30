import "./App.css";
import React, { useState, useEffect } from "react";
import CommandCoreAiTransmissionComponent from "./components/CommandCoreAiTransmissionComponent";
import CommandCoreAiWeatherComponent from "./components/CommandCoreAiWeatherComponent";
import ThemeToggleButton from "./components/ThemeToggleButton";
import HelpModal from "./components/HelpModal";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("command-core-weather-report");
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
  }, [darkMode]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <ThemeToggleButton
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
      />
      <button
        onClick={() => setShowHelp(true)}
        className="help-button"
        disabled={showHelp}
      >
        Help
      </button>
      <div className="tab-buttons">
        <button
          className={activeTab === "command-core-transmission" ? "active" : ""}
          onClick={() => handleTabChange("command-core-transmission")}
        >
          Tactical Transmission
        </button>
        <button
          className={
            activeTab === "command-core-weather-report" ? "active" : ""
          }
          onClick={() => handleTabChange("command-core-weather-report")}
        >
          Weather Intel
        </button>
      </div>
      {activeTab === "command-core-weather-report" && (
        <CommandCoreAiWeatherComponent />
      )}
      {activeTab === "command-core-transmission" && (
        <CommandCoreAiTransmissionComponent />
      )}
      {showHelp && (
        <HelpModal onClose={() => setShowHelp(false)} activeTab={activeTab} />
      )}
    </div>
  );
}

export default App;
