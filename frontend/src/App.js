import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Register from "./components/Register";
import JuniorDashboard from "./components/JuniorDashboard";
import SeniorDashboard from "./components/SeniorDashboard";
import Forum from "./components/Forum";
import About from "./components/About";

function App() {
  return (
    <Router>
      {/* Navbar visible everywhere */}
      <Navbar />

      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Auth & Dashboards */}
        <Route path="/register" element={<Register />} />
        <Route path="/junior-dashboard" element={<JuniorDashboard />} />
        <Route path="/senior-dashboard" element={<SeniorDashboard />} />

        {/* Others */}
        <Route path="/forum" element={<Forum />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
