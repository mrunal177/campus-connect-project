import React from "react";
import { useNavigate } from "react-router-dom";

function JuniorDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h2>Welcome, Junior!</h2>
      <button onClick={() => navigate("/senior-list")}>Find Seniors</button>
      <button onClick={() => navigate("/forum")}>Ask Questions</button>
    </div>
  );
}

export default JuniorDashboard;
