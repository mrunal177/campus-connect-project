import React from "react";
import { FaSearch, FaLightbulb, FaCompass } from "react-icons/fa";
import "./JuniorDashboard.css";

function JuniorDashboard() {
  return (
    <div className="junior-dashboard">
      <header className="junior-header">
        <h1>Welcome, Junior 👋</h1>
        <p>Your space to learn, grow, and connect!</p>
      </header>

      <div className="junior-grid">
        <div className="junior-card">
          <FaSearch className="junior-icon" />
          <h3>Find a Mentor</h3>
          <p>
            Connect with seniors who can guide you through academics and
            projects.
          </p>
          <button>Explore Mentors</button>
        </div>

        <div className="junior-card">
          <FaLightbulb className="junior-icon" />
          <h3>Explore Project Ideas</h3>
          <p>
            Get inspired by trending ideas and join collaborations that excite
            you.
          </p>
          <button>Discover Ideas</button>
        </div>

        <div className="junior-card">
          <FaCompass className="junior-icon" />
          <h3>My Sessions</h3>
          <p>
            Track your mentorship sessions and chats with your mentors easily.
          </p>
          <button>View Sessions</button>
        </div>
      </div>
    </div>
  );
}

export default JuniorDashboard;
