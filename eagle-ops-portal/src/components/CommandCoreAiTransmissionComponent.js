import React, { useState } from "react";

function CommandCoreAiTransmissionComponent() {
  const [prompt, setPrompt] = useState("");
  const [
    commandCoreAiTransmissionResponse,
    setCommandCoreAiTransmissionResponse,
  ] = useState("");

  const askCommandCoreAiTransmission = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/command-core-transmission-options?prompt=${prompt}`
      );
      const data = await response.text();
      console.log(data);
      setCommandCoreAiTransmissionResponse(data);
    } catch (error) {
      console.error(
        "Error generating Command Core AI Transmission response : ",
        error
      );
    }
  };

  return (
    <div>
      <div className="section-header">
        <h2>Command Core AI - Transmission</h2>
      </div>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Transmit mission directive or query"
      />
      <button onClick={askCommandCoreAiTransmission}>
        Transmit to Command Core AI
      </button>
      <div className="output">
        <p>{commandCoreAiTransmissionResponse}</p>
      </div>
    </div>
  );
}

export default CommandCoreAiTransmissionComponent;
