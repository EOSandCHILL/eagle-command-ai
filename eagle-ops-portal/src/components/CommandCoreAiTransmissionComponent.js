import React, { useState } from "react";

function CommandCoreAiTransmissionComponent() {
  const [prompt, setPrompt] = useState("");
  const [
    commandCoreAiTransmissionResponse,
    setCommandCoreAiTransmissionResponse,
  ] = useState("");
  const [copied, setCopied] = useState(false);

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
      <button
        className="transmission-generate-button"
        onClick={askCommandCoreAiTransmission}
      >
        Transmit to Command Core AI
      </button>
      {commandCoreAiTransmissionResponse && (
        <div className="output">
          <div className="output-header">
            <button
              onClick={() => {
                navigator.clipboard.writeText(
                  commandCoreAiTransmissionResponse
                );
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
            >
              {copied ? "Copied!" : "Copy Response"}
            </button>
          </div>
          <p>{commandCoreAiTransmissionResponse}</p>
        </div>
      )}
    </div>
  );
}

export default CommandCoreAiTransmissionComponent;
