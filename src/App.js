import React from "react";
import "./App.css";
import TypingText from "./TypingText";

function App() {
  return (
    <div>
      <nav>
        <div className="nav-left">Simon</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home Section */}
      <section className="section space-section" id="home">
        <video className="background-video" autoPlay loop muted>
          <source src="public/videos/oceanbg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="header caption">
          <TypingText text=" I am Simon" speed={200} pause={1000} />
        </div>
      </section>

      {/* Other sections */}
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
