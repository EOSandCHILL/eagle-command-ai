import React, { useState, useEffect } from "react";
import CommandCoreAiTransmissionComponent from "../components/CommandCoreAiTransmissionComponent";
import CommandCoreAiWeatherComponent from "../components/CommandCoreAiWeatherComponent";
import ThemeToggleButton from "../components/ThemeToggleButton";
import HelpModal from "../components/HelpModal";

function EagleOpsScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("weather");
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
          className={activeTab === "transmission" ? "active" : ""}
          onClick={() => handleTabChange("transmission")}
        >
          Tactical Transmission
        </button>
        <button
          className={activeTab === "weather" ? "active" : ""}
          onClick={() => handleTabChange("weather")}
        >
          Weather Intel
        </button>
      </div>
      {activeTab === "weather" && <CommandCoreAiWeatherComponent />}
      {activeTab === "transmission" && <CommandCoreAiTransmissionComponent />}
      {showHelp && (
        <HelpModal onClose={() => setShowHelp(false)} activeTab={activeTab} />
      )}
    </div>
  );
}

export default EagleOpsScreen;
