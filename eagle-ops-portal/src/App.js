import React, { useState, useEffect } from "react";
import "./css/App.css";
import "./css/LandingPage.css";
import "./css/Spinner.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import EagleOpsScreen from "./screens/EagleOpsScreen";
import Spinner from "./components/Spinner";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />;
  }

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
