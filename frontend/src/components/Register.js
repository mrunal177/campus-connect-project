import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import panda from "./r.png";

function Register() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          color: 0x00ffff,
          backgroundColor: 0x000000,
          points: 12.0,
          maxDistance: 20.0,
          spacing: 18.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  // ✅ Simple “verification” + redirect logic
  const handleRegister = (e) => {
    e.preventDefault();

    if (!username || !email || !password || !role) {
      alert("Please fill all fields and select your role!");
      return;
    }

    // just to simulate backend verification
    if (password.length < 4) {
      alert("Password must be at least 4 characters long!");
      return;
    }

    // Save user info locally (optional for demo)
    localStorage.setItem("user", JSON.stringify({ username, email, role }));

    // Redirect based on role
    if (role === "junior") {
      navigate("/junior-dashboard");
    } else if (role === "senior") {
      navigate("/senior-dashboard");
    }
  };

  return (
    <div ref={vantaRef} className="register-container">
      <div className="register-box">
        <div className="register-left">
          <h2>Create Account</h2>
          <p>
            Already have an account?{" "}
            <span className="login-link" onClick={() => navigate("/login")}>
              Sign in
            </span>
          </p>

          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Choose your role:</label>
          <div className="role-options">
            <label>
              <input
                type="radio"
                name="role"
                value="junior"
                checked={role === "junior"}
                onChange={(e) => setRole(e.target.value)}
              />{" "}
              Junior
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="senior"
                checked={role === "senior"}
                onChange={(e) => setRole(e.target.value)}
              />{" "}
              Senior
            </label>
          </div>

          <button className="register-btn" onClick={handleRegister}>
            Register
          </button>
        </div>

        <div className="register-right">
          <div className="avatar-circle">
            <img src={panda} alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
