import React, { useState } from "react";
import "./SeniorDashboard.css";
import "../App.css";

function SeniorDashboard() {
  const [requests] = useState([
    {
      name: "Aarav Patil",
      question: "How to prepare for campus placements?",
      time: "2 hrs ago",
    },
    {
      name: "Isha Verma",
      question: "Tips for mini-project selection?",
      time: "5 hrs ago",
    },
    {
      name: "Rohan Mehta",
      question: "Where to find good internships?",
      time: "1 day ago",
    },
  ]);

  const [mentorships] = useState([
    {
      junior: "Neha Singh",
      topic: "Resume Review",
      date: "Nov 1",
      status: "Upcoming",
    },
    {
      junior: "Karan Gupta",
      topic: "Mock Interview",
      date: "Oct 28",
      status: "Completed",
    },
  ]);

  const [progress] = useState({
    totalSessions: 10,
    completed: 8,
    juniorsHelped: 12,
    rating: 4.9,
  });

  const [activeSection, setActiveSection] = useState("overview");

  return (
    <div className="senior-dashboard">
      <div className="dashboard-header">
        <h1>Welcome, Senior 👨‍🏫</h1>
        <p>Your experience can spark someone’s journey.</p>
        <p>Guide. Inspire. Empower. Make your mark on campus.</p>
      </div>

      {/* top cards */}
      <div className="card-grid">
        <div
          className={`dashboard-card ${
            activeSection === "questions" ? "active" : ""
          }`}
          onClick={() => setActiveSection("questions")}
        >
          <h3>💬 Answer Questions</h3>
          <p>Share your wisdom — help juniors grow.</p>
          <button>Open Forum</button>
        </div>

        <div
          className={`dashboard-card ${
            activeSection === "mentors" ? "active" : ""
          }`}
          onClick={() => setActiveSection("mentors")}
        >
          <h3>🌱 Mentor Juniors</h3>
          <p>Be the guide you once needed.</p>
          <button>Mentor Now</button>
        </div>

        <div
          className={`dashboard-card ${
            activeSection === "achievements" ? "active" : ""
          }`}
          onClick={() => setActiveSection("achievements")}
        >
          <h3>🎯 Achievements</h3>
          <p>Celebrate your mentoring milestones and impact.</p>
          <button>View Progress</button>
        </div>
      </div>

      {/* info sections */}
      <div className="dashboard-details">
        {activeSection === "questions" && (
          <div className="info-box fade-in">
            <h2>💬 Recent Questions from Juniors</h2>
            <ul>
              {requests.map((r, i) => (
                <li key={i}>
                  <strong>{r.name}</strong>: {r.question}{" "}
                  <span>({r.time})</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeSection === "mentors" && (
          <div className="info-box fade-in">
            <h2>🌱 Mentoring Activity</h2>
            <ul>
              {mentorships.map((m, i) => (
                <li key={i}>
                  <strong>{m.junior}</strong> — {m.topic} ({m.status} on{" "}
                  {m.date})
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeSection === "achievements" && (
          <div className="info-box fade-in">
            <h2>🎯 Your Mentorship Stats</h2>
            <p>
              Total Sessions: <strong>{progress.totalSessions}</strong>
            </p>
            <p>
              Completed: <strong>{progress.completed}</strong>
            </p>
            <p>
              Juniors Helped: <strong>{progress.juniorsHelped}</strong>
            </p>
            <p>Average Rating: ⭐ {progress.rating}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SeniorDashboard;
