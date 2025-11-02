import React from "react";
import "./About.css";
import "../App.css";
import mayoori from "./mayoori.jpeg";
import mrunal from "./mitali.jpeg";
import mitali from "./mrunal.jpeg";
import sawani from "./sawani.jpeg";
import snehal from "./snehal.jpeg";

function About() {
  const founders = [
    { name: "Mayoori", role: "Backend Developer", image: mayoori },
    { name: "Mrunal", role: "Frontend Developer", image: mrunal },
    { name: "Sawani", role: "Backend Developer", image: sawani },
    { name: "Mitali", role: "Frontend Developer", image: mitali },
    { name: "Snehal", role: "Content & Curation", image: snehal },
  ];

  return (
    <div className="about-wrapper">
      {/* ABOUT + MISSION COMBINED */}
      <div className="about-hero combined">
        <h1 className="about-title">About Campus Connect</h1>
        <p className="about-subtext">
          Campus Connect is a collaborative student platform built to link
          juniors, seniors, and peers through mentorship, teamwork, and shared
          creativity. Our goal is to make learning and collaboration within
          colleges more connected, accessible, and inspiring.
        </p>

        <h2 className="section-heading mission-inline">Our Mission</h2>
        <p className="mission-text">
          We aim to empower every student to learn, grow, and innovate in their
          academic journey. Whether it’s finding mentors, collaborating on
          ideas, or creating meaningful projects — Campus Connect turns student
          potential into collective progress.
        </p>
      </div>

      {/* FOUNDERS SECTION */}
      <div className="team-section">
        <h2 className="section-heading">Meet Our Founders</h2>
        <div className="founder-container">
          {founders.map((person, index) => (
            <div className="founder-card" key={index}>
              <div className="photo-frame">
                <img
                  src={person.image}
                  alt={person.name}
                  className="founder-img"
                />
              </div>
              <h3>{person.name}</h3>
              <p>{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
