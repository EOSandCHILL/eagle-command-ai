import React, { useState } from "react";

function CommandCoreAiWeatherComponent() {
  const [location, setLocation] = useState("");
  const [missionType, setMissionType] = useState("");
  const [duration, setDuration] = useState("");
  const [startTime, setStartTime] = useState("");
  const [altitudeLevel, setAltitudeLevel] = useState("");
  const [terrainType, setTerrainType] = useState("");
  const [mobilityType, setMobilityType] = useState("");
  const [gearLoad, setGearLoad] = useState("");
  const [weatherReport, setWeatherReport] = useState("");
  const [copied, setCopied] = useState(false);

  const generateCommandCoreAiWeatherReport = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/command-core-ai-weather-report?location=${encodeURIComponent(
          location
        )}&missionType=${encodeURIComponent(
          missionType
        )}&duration=${encodeURIComponent(
          duration
        )}&startTime=${encodeURIComponent(
          startTime
        )}&altitudeLevel=${encodeURIComponent(
          altitudeLevel
        )}&terrainType=${encodeURIComponent(
          terrainType
        )}&mobilityType=${encodeURIComponent(
          mobilityType
        )}&gearLoad=${encodeURIComponent(gearLoad)}`
      );
      const data = await response.text();
      setWeatherReport(data);
    } catch (error) {
      console.error("Error generating weather report:", error);
    }
  };

  return (
    <div>
      <div className="section-header">
        <h2>Operational Weather Intelligence</h2>
      </div>
      <div className="form-group">
        <h4>Target Location</h4>
        <input
          type="text"
          className="form-input"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter target location (city, state, or region)"
        />
      </div>
      <div className="form-group">
        <h4>Mission Type</h4>
        <select
          className="form-input form-input-select"
          value={missionType}
          onChange={(e) => setMissionType(e.target.value)}
        >
          <option value="">Select mission type</option>
          <option value="Reconnaissance">Reconnaissance</option>
          <option value="Assault">Assault</option>
          <option value="Security">Security</option>
          <option value="Rescue">Rescue</option>
          <option value="Patrol">Patrol</option>
          <option value="Defensive">Defensive</option>
          <option value="Search and Destroy">Search and Destroy</option>
          <option value="Insertion">Insertion</option>
          <option value="Extraction">Extraction</option>
          <option value="Surveillance">Surveillance</option>
          <option value="Escort">Escort</option>
          <option value="Ambush">Ambush</option>
          <option value="Cordon and Search">Cordon and Search</option>
          <option value="Humanitarian">Humanitarian</option>
          <option value="Route Clearance">Route Clearance</option>
        </select>
      </div>
      <div className="form-group">
        <h4>Mission Duration</h4>
        <input
          type="text"
          className="form-input"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="e.g., 3 hours, 2 days"
        />
      </div>
      <div className="form-group">
        <h4>Mission Start Time</h4>
        <input
          type="text"
          className="form-input"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          placeholder="e.g., 0400 Zulu, 09:00 local"
        />
      </div>
      <div className="form-group">
        <h4>Altitude Level</h4>
        <select
          className="form-input form-input-select"
          value={altitudeLevel}
          onChange={(e) => setAltitudeLevel(e.target.value)}
        >
          <option value="">Select altitude level</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div className="form-group">
        <h4>Terrain Type</h4>
        <select
          className="form-input form-input-select"
          value={terrainType}
          onChange={(e) => setTerrainType(e.target.value)}
        >
          <option value="">Select terrain type</option>
          <option value="Urban">Urban</option>
          <option value="Desert">Desert</option>
          <option value="Forest">Forest</option>
          <option value="Jungle">Jungle</option>
          <option value="Mountain">Mountain</option>
          <option value="Coastal">Coastal</option>
          <option value="Swamp">Swamp</option>
          <option value="Grassland">Grassland</option>
          <option value="Tundra">Tundra</option>
          <option value="Riverine">Riverine</option>
          <option value="Hills">Hills</option>
        </select>
      </div>
      <div className="form-group">
        <h4>Mobility Type</h4>
        <select
          className="form-input form-input-select"
          value={mobilityType}
          onChange={(e) => setMobilityType(e.target.value)}
        >
          <option value="">Select mobility type</option>
          <option value="Foot">Foot</option>
          <option value="Vehicle">Vehicle</option>
          <option value="Air">Air</option>
          <option value="Naval">Naval</option>
          <option value="Mounted">Mounted</option>
          <option value="Amphibious">Amphibious</option>
          <option value="Aerial Drop">Aerial Drop</option>
        </select>
      </div>
      <div className="form-group">
        <h4>Gear Load</h4>
        <select
          className="form-input form-input-select"
          value={gearLoad}
          onChange={(e) => setGearLoad(e.target.value)}
        >
          <option value="">Select gear load</option>
          <option value="Light">Light</option>
          <option value="Standard">Standard</option>
          <option value="Heavy">Heavy</option>
        </select>
      </div>
      <button
        className="generate-button"
        onClick={generateCommandCoreAiWeatherReport}
      >
        Generate Weather Intelligence Report
      </button>
      {weatherReport && (
        <div className="output">
          <div className="output-header">
            <button
              onClick={() => {
                navigator.clipboard.writeText(weatherReport);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
            >
              {copied ? "Copied!" : "Copy Report"}
            </button>
          </div>
          <pre className="command-core-ai-weather-report-text">
            {weatherReport}
          </pre>
        </div>
      )}
    </div>
  );
}

export default CommandCoreAiWeatherComponent;
