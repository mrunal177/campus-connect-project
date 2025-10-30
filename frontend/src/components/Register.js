import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import "./Register.css";
import panda from "./r.png"; // temporary panda image

function Register() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

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

  return (
    <div ref={vantaRef} className="register-container">
      <div className="register-box">
        <div className="register-left">
          <h2>Create Account</h2>
          <p>
            Already have an account? <span className="login-link">Sign in</span>
          </p>

          <label>Username</label>
          <input type="text" placeholder="Enter your name" />

          <label>Email</label>
          <input type="email" placeholder="example@gmail.com" />

          <label>Password</label>
          <input type="password" placeholder="********" />

          <label>Choose your role:</label>
          <div className="role-options">
            <label>
              <input type="radio" name="role" /> Junior
            </label>
            <label>
              <input type="radio" name="role" /> Senior
            </label>
          </div>

          <button className="register-btn">Register</button>
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
