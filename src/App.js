import React from "react";
import "./App.css";
import TypingText from "./TypingText";
import oceanbg from './videos/oceanbg.mp4';


function App() {
  return (
    <div>
      {/* Navbar */}
      <nav>
        <div className="nav-left">Simon Tekle Tesfatsion</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home Section with video */}
      <section className="section home-section" id="home">
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={oceanbg} type="video/mp4" />
      </video>

        <div className="header caption">
          <TypingText text=" I am Simon" speed={150} pause={1000} />
        </div>
      </section>

      {/* Other Sections */}
      <section className="section space-section" id="about">
        <div className="header caption">
          <h5>About</h5>
        </div>
      </section>

      <section className="section space-section" id="projects">
        <div className="header caption">
          <h5>Projects</h5>
        </div>
      </section>

      <section className="section space-section" id="skills">
        <div className="header caption">
          <h5>Skills</h5>
        </div>
      </section>

      <section className="section space-section" id="contact">
        <div className="header caption">
          <h5>Contact</h5>
        </div>
      </section>
    </div>
  );
}

export default App;
