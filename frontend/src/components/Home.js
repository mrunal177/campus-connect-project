import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to Campus Connect 🎓</h1>
      <p>Connecting Juniors and Seniors to learn, guide, and grow together.</p>
      <button onClick={() => navigate("/register")}>Get Started</button>
    </div>
  );
}

export default Home;
