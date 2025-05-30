import React from "react";

/**
 * HelpModal component displays instructions in a modal overlay.
 * @param {Function} onClose - Callback to close the modal.
 * @param {string} activeTab - The currently active tab to customize help content.
 */
function HelpModal({ onClose, activeTab }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Need Help?</h2>
        </div>
        {activeTab === "command-core-transmission" ? (
          <>
            <p>
              The <strong>Tactical Transmission</strong> tab is designed for
              generating AI-powered mission communication messages.
            </p>
            <p>
              Its purpose is to help users quickly draft tactical messages or
              reports using AI by filling in relevant details and clicking{" "}
              <strong>Generate</strong>. The <strong>Copy</strong> button allows
              for easy reuse of the output.
            </p>
            <p>
              Think of it as your AI field radio — structured, fast, and
              mission-ready communication generation.
            </p>
          </>
        ) : (
          <>
            <p>
              The <strong>Weather Intel</strong> tab helps generate structured
              weather intelligence reports for missions.
            </p>
            <p>
              Its purpose is to gather mission-related environmental details and
              generate a readable weather report using AI. Just fill in the
              inputs, click <strong>Generate</strong>, and use{" "}
              <strong>Copy</strong> to save it.
            </p>
            <p>
              It acts like your virtual meteorologist for mission planning —
              smart, detailed, and focused on intel.
            </p>
          </>
        )}
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default HelpModal;
