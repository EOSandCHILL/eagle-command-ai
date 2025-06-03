import React from "react";

/**
 * PowerDown component displays a confirmation modal to power down the app.
 * @param {Function} onClose  – close modal without powering down
 * @param {Function} onConfirm – confirm and navigate away
 */
function PowerDown({ onClose, onConfirm }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Power Down</h2>
        </div>
        <p>Are you sure you want to power down Command Core AI?</p>
        <div className="powerdown-buttons">
          <button className="confirm-button" onClick={onConfirm}>
            Yes
          </button>
          <button className="cancel-button" onClick={onClose}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default PowerDown;
