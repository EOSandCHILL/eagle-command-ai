import React from "react";

/**
 * HelpModal component displays instructions in a modal overlay.
 * @param {Function} onClose - Callback to close the modal.
 * @param {string} activeTab - The currently active tab to customize help content.
 */
function HelpModal({ onClose, activeTab }) {
  const renderHelpContent = () => {
    if (activeTab === "transmission") {
      return (
        <>
          <p>
            The <strong>Tactical Transmission</strong> tab is designed for
            generating AI-powered mission communication messages.
          </p>
          <p>
            Its purpose is to help users quickly draft tactical messages or
            reports using AI by filling in relevant details and clicking{" "}
            <strong>Transmit to Command Core AI</strong>. The{" "}
            <strong>Copy</strong> button allows for easy reuse of the output.
          </p>
          <p>
            Think of it as your AI field radio — structured, fast, and
            mission-ready communication generation.
          </p>
        </>
      );
    } else if (activeTab === "weather") {
      return (
        <>
          <p>
            The <strong>Weather Intelligence</strong> tab helps generate
            structured weather intelligence reports for missions.
          </p>
          <p>
            Its purpose is to gather mission-related environmental details and
            generate a readable weather report using AI. Just fill in the
            inputs, click <strong>Generate AI Weather Report</strong>, and use{" "}
            <strong>Copy</strong> to save it.
          </p>
          <p>
            It acts like your virtual meteorologist for mission planning —
            smart, detailed, and focused on intelligence.
          </p>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Need Help?</h2>
        </div>
        {renderHelpContent()}
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default HelpModal;
