import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
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

      <button className="join-btn">Join Now</button>
    </nav>
  );
}

export default Navbar;
