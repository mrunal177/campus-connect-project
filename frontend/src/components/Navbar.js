import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate("/register");
  };

  return (
    <nav className="navbar">
      <div className="logo">Campus Connect</div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/forum">Forum</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <button className="join-btn" onClick={handleJoinClick}>
        Join Now
      </button>
    </nav>
  );
}

export default Navbar;
