import "./css/App.css";
import "./css/LandingPage.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import EagleOpsScreen from "./screens/EagleOpsScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/command" element={<EagleOpsScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
