// src/screens/LandingPage.js

import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <h1>Eagle-Command-AI</h1>
      <h2 className="landing-tagline">
        Real-Time Mission Transmission and
        <br />
        Weather Intelligence
      </h2>
      <ul className="features-list">
        <li>✔ Tactical Communication Generation</li>
        <li>✔ Mission Weather Forecasting</li>
        <li>✔ Military-Grade User Interface</li>
        <li>✔ Secure & Configurable</li>
      </ul>
      <button onClick={() => navigate("/command")} className="launch-button">
        Launch Command Core
      </button>
    </div>
  );
};

export default LandingPage;
