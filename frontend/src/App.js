import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import JuniorDashboard from "./components/JuniorDashboard";
import SeniorDashboard from "./components/SeniorDashboard";
import Forum from "./components/Forum";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/junior-dashboard" element={<JuniorDashboard />} />
        <Route path="/senior-dashboard" element={<SeniorDashboard />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
