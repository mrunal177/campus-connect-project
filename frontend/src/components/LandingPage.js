import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="landing-title">
          Welcome to <span>Campus Connect 🎓</span>
        </h1>

        <p className="landing-subtitle tagline">
          Your campus. Your community. Your connection.
        </p>

        <p className="landing-description">
          Experience the smarter way to stay connected with{" "}
          <strong>Campus Connect!</strong>
          Join a thriving campus network — find peers, share ideas, and grow
          together.
        </p>

        <div className="landing-buttons">
          <button className="primary-btn" onClick={() => navigate("/register")}>
            Get Started
          </button>
          <button className="secondary-btn" onClick={() => navigate("/about")}>
            Explore More
          </button>
        </div>

        <p className="footer-text">
          Made with 💚 by Team <span>Campus Connect</span>
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
