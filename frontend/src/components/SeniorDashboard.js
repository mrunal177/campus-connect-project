import React from "react";
import "./SeniorDashboard.css";
import "../App.css";
function SeniorDashboard() {
  return (
    <div className="senior-dashboard">
      <div className="dashboard-header">
        <h1>Welcome, Senior 👨‍🏫</h1>
        <p>Guide. Inspire. Connect. Create impact in your campus community.</p>
      </div>

      <div className="card-grid">
        <div className="dashboard-card">
          <h3>💬 View Questions</h3>
          <p>Help juniors by answering their questions</p>
          <button>Open Forum</button>
        </div>

        <div className="dashboard-card">
          <h3>🌱 Mentor Juniors</h3>
          <p>Provide guidance and share your experience</p>
          <button>Mentor Now</button>
        </div>

        <div className="dashboard-card">
          <h3>🎯 Achievements</h3>
          <p>Track your mentoring milestones</p>
          <button>View Progress</button>
        </div>
      </div>
    </div>
  );
}

export default SeniorDashboard;
