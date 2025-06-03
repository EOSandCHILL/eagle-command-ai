import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CommandCoreAiTransmissionComponent from "../components/CommandCoreAiTransmissionComponent";
import CommandCoreAiWeatherComponent from "../components/CommandCoreAiWeatherComponent";
import ThemeToggleButton from "../components/ThemeToggleButton";
import HelpModal from "../components/HelpModal";
import PowerDown from "../components/PowerDown";
import "../css/PowerDown.css";

function EagleOpsScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("weather");
  const [showHelp, setShowHelp] = useState(false);
  const [showPowerDown, setShowPowerDown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
  }, [darkMode]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <button
        onClick={() => setShowPowerDown(true)}
        className="powerdown-button"
        disabled={showHelp || showPowerDown}
      >
        Power Down
      </button>
      <ThemeToggleButton
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
      />
      <button
        onClick={() => setShowHelp(true)}
        className="help-button"
        disabled={showHelp || showPowerDown}
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
          Weather Intelligence
        </button>
      </div>
      {activeTab === "weather" && <CommandCoreAiWeatherComponent />}
      {activeTab === "transmission" && <CommandCoreAiTransmissionComponent />}
      {showHelp && (
        <HelpModal onClose={() => setShowHelp(false)} activeTab={activeTab} />
      )}
      {showPowerDown && (
        <PowerDown
          onClose={() => setShowPowerDown(false)}
          onConfirm={() => navigate("/")}
        />
      )}
    </div>
  );
}

export default EagleOpsScreen;
