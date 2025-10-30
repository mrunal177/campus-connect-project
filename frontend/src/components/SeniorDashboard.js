import React from "react";
import { useNavigate } from "react-router-dom";

function SeniorDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h2>Welcome, Senior!</h2>
      <button onClick={() => navigate("/forum")}>View Questions</button>
      <button onClick={() => navigate("/junior-list")}>Mentor Juniors</button>
    </div>
  );
}

export default SeniorDashboard;
