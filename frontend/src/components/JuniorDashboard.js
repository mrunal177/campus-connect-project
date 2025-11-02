import React, { useState } from "react";
import {
  FaSearch,
  FaLightbulb,
  FaCompass,
  FaUserGraduate,
} from "react-icons/fa";
import "./JuniorDashboard.css";

function JuniorDashboard() {
  const [mentors] = useState([
    {
      name: "Mihika Kurhade",
      skill: "Machine Learning",
      rating: 4.8,
      availability: "Available",
    },
    {
      name: "Mrunal Deosarkar",
      skill: "Web Development",
      rating: 4.9,
      availability: "Busy",
    },
    {
      name: "Avni Chandak",
      skill: "IoT & Embedded Systems",
      rating: 4.7,
      availability: "Available",
    },
  ]);

  const [projects] = useState([
    {
      title: "Smart Energy Saver",
      desc: "IoT project to optimize energy usage on campus.",
    },
    {
      title: "AI Chatbot Assistant",
      desc: "An NLP-based student support chatbot.",
    },
    {
      title: "Portfolio Builder",
      desc: "Tool for students to showcase their projects online.",
    },
  ]);

  const [sessions] = useState([
    {
      mentor: "Sawani ",
      topic: "Frontend Debugging Tips",
      date: "Nov 3",
      status: "Upcoming",
    },
    {
      mentor: "Aarav Patel",
      topic: "Intro to ML",
      date: "Oct 30",
      status: "Completed",
    },
  ]);

  const [activeSection, setActiveSection] = useState("overview");

  return (
    <div className="junior-dashboard">
      <header className="junior-header">
        <h1>Welcome, Junior 👋</h1>
        <p>Learn. Explore. Connect — your journey starts here!</p>
      </header>

      {/* Main Cards */}
      <div className="junior-grid">
        <div
          className={`junior-card ${
            activeSection === "mentors" ? "active" : ""
          }`}
          onClick={() => setActiveSection("mentors")}
        >
          <FaSearch className="junior-icon" />
          <h3>Find a Mentor</h3>
          <p>
            Connect with seniors who can guide you through academics and
            projects.
          </p>
          <button>Explore Mentors</button>
        </div>

        <div
          className={`junior-card ${
            activeSection === "projects" ? "active" : ""
          }`}
          onClick={() => setActiveSection("projects")}
        >
          <FaLightbulb className="junior-icon" />
          <h3>Explore Project Ideas</h3>
          <p>
            Get inspired by trending ideas and collaborations that excite you.
          </p>
          <button>Discover Ideas</button>
        </div>

        <div
          className={`junior-card ${
            activeSection === "sessions" ? "active" : ""
          }`}
          onClick={() => setActiveSection("sessions")}
        >
          <FaCompass className="junior-icon" />
          <h3>My Sessions</h3>
          <p>Track your mentorship sessions and chats with your mentors.</p>
          <button>View Sessions</button>
        </div>
      </div>

      {/* Details Section */}
      <div className="junior-details">
        {activeSection === "mentors" && (
          <div className="info-box">
            <h2>👨‍🏫 Available Mentors</h2>
            <div className="mentor-list">
              {mentors.map((m, i) => (
                <div className="mentor-card" key={i}>
                  <FaUserGraduate className="mentor-icon" />
                  <h4>{m.name}</h4>
                  <p>{m.skill}</p>
                  <p>⭐ {m.rating}</p>
                  <span
                    className={`status ${
                      m.availability === "Available" ? "available" : "busy"
                    }`}
                  >
                    {m.availability}
                  </span>
                  <button
                    className="book-btn"
                    disabled={m.availability !== "Available"}
                  >
                    {m.availability === "Available"
                      ? "Book Session"
                      : "Unavailable"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === "projects" && (
          <div className="info-box">
            <h2>💡 Trending Project Ideas</h2>
            <ul>
              {projects.map((p, i) => (
                <li key={i}>
                  <strong>{p.title}</strong> — {p.desc}
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeSection === "sessions" && (
          <div className="info-box">
            <h2>📅 My Mentorship Sessions</h2>
            <ul>
              {sessions.map((s, i) => (
                <li key={i}>
                  <strong>{s.mentor}</strong>: {s.topic} — <em>{s.date}</em> (
                  {s.status})
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default JuniorDashboard;
