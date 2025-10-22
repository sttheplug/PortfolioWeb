import React, { useState, useEffect } from "react";
import MainTitle from "./MainTitle";
import "./App.css";
import TypingText from "./TypingText";
import oceanbg from './videos/oceanbg.mp4';

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
  const sections = ["home", "about", "projects", "skills", "contact"];
  const observers = [];

  sections.forEach((id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(id);
          // Update the URL hash without scrolling
          window.history.replaceState(null, "", `#${id}`);
        }
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    observer.observe(section);
    observers.push(observer);
  });

  return () => {
    observers.forEach((observer) => observer.disconnect());
  };
}, []);

  return (
    <div>
      <nav>
        <div className="nav-left">Simon Tekle Tesfatsion</div>
        <div className="nav-links">
          <a href="#home" className={activeSection === "home" ? "active" : ""}>Home</a>
          <a href="#about" className={activeSection === "about" ? "active" : ""}>About</a>
          <a href="#projects" className={activeSection === "projects" ? "active" : ""}>Projects</a>
          <a href="#skills" className={activeSection === "skills" ? "active" : ""}>Skills</a>
          <a href="#contact" className={activeSection === "contact" ? "active" : ""}>Contact</a>
        </div>
      </nav>

      {/* Home Section */}
      <section className="section home-section" id="home">
        <video className="background-video" autoPlay loop muted playsInline>
          <source src={oceanbg} type="video/mp4" />
        </video>
        <div className="header caption">
          <TypingText texts={["I am Simon", "Welcome to my Portfolio"]} speed={90} pause={1500} />
          <p className="subtext">Software Developer • Creative Coder • Tech Enthusiast</p>
          <div className="button-group">
            <button className="btn">Download CV</button>
            <a href="#contact" className="btn">Contact Me</a>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <section className="section space-section" id="about">
        <div className="header caption"><h5>About</h5></div>
      </section>

      <section className="section space-section" id="projects">
        <div className="header caption"><h5>Projects</h5></div>
      </section>

      <section className="section space-section" id="skills">
        <div className="header caption"><h5>Skills</h5></div>
      </section>

      <section className="section space-section" id="contact">
        <div className="header caption"><h5>Contact</h5></div>
      </section>
    </div>
  );
}

export default App;
