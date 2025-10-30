import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import BIRDS from "vanta/dist/vanta.birds.min";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ Attach THREE to global window before initializing Vanta
    if (!window.THREE) {
      window.THREE = THREE;
    }

    let effect;
    const initVanta = () => {
      if (!effect && vantaRef.current) {
        effect = BIRDS({
          el: vantaRef.current,
          THREE: window.THREE,
          backgroundColor: 0x0b1c2c,
          color1: 0x00ffb4,
          color2: 0x00c6a7,
          birdSize: 1.2,
          quantity: 3.0,
          backgroundAlpha: 1.0,
          separation: 40.0,
          alignment: 40.0,
          cohesion: 20.0,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
        });
      }
    };

    const timeout = setTimeout(initVanta, 300);

    return () => {
      clearTimeout(timeout);
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <div className="landing-container">
      <div ref={vantaRef} className="vanta-bg"></div>

      <div className="landing-content">
        <h1>Welcome to Campus Connect</h1>
        <p>
          Bridging juniors and seniors — a space to learn, grow, and connect.
        </p>
        <div className="button-group">
          <button onClick={() => navigate("/register")}>Get Started</button>
          <button onClick={() => navigate("/about")}>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
