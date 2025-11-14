import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { projects } from "./data/projects";
import { interests } from "./data/interests";
import TypingText from "./TypingText";
import CardProject from "./CardProject.js";
import ProjectDetails from "./ProjectDetails.js";
import ContactIcons from "./ContactIcons.js";
import oceanbg from "./assets/videos/oceanbg.mp4";
import space1 from "./assets/videos/space1.mp4";
import "./App.css";
import "./Projects.css";
import "./Interests.css";
import "./Contact.css";

function HomePage() {
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const sections = ["home", "about", "projects", "interests", "contact"];
    const observers = [];
    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
            window.history.replaceState(null, "", `#${id}`);
          }
        },
        { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
      );
      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <div>
      {/* 🧭 Navigation */}
      <nav>
        <div className="nav-left">Simon Tekle Tesfatsion</div>
        <div className="nav-links">
          <a href="#home" className={activeSection === "home" ? "active" : ""}>
            Home
          </a>
          <a href="#about" className={activeSection === "about" ? "active" : ""}>
            About
          </a>
          <a
            href="#projects"
            className={activeSection === "projects" ? "active" : ""}
          >
            Projects
          </a>
          <a
            href="#interests"
            className={activeSection === "interests" ? "active" : ""}
          >
            Interests
          </a>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
          >
            Contact
          </a>
        </div>
      </nav>

      {/* 🏠 Home Section */}
      <section className="section home-section" id="home">
        <video className="background-video" autoPlay loop muted playsInline>
          <source src={oceanbg} type="video/mp4" />
        </video>
        <div className="header caption">
          <TypingText
            texts={["Hello, I am Simon", "Welcome to my Portfolio"]}
            speed={90}
            pause={1500}
          />
          <p className="subtext">
            Software Developer • Creative Coder • Tech Enthusiast
          </p>
          <div className="button-group">
            <a href="/Simon Tekle Tesfatsion - CV.pdf" download className="btn">
              <FaDownload
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              />
              Download CV
            </a>
            <a href="#contact" className="btn">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* 👤 About Section */}
      <section className="section space-section" id="about">
        <div className="about-container">
          <div className="about-photo"></div>
          <div className="about-box">
            <h1 className="section-title">About Me</h1>
            <p>
              Hi, I’m <strong>Simon Tekle Tesfatsion</strong>, a recent Computer
              Science graduate from KTH. I’m passionate about software
              development, DevOps, and cloud technologies, and I love turning
              complex problems into elegant, working solutions.
            </p>
            <p>
              When I’m not coding, you’ll find me exploring finance charts,
              trading, or hitting the gym to debug my workout routine. I’m eager
              to learn, collaborate with great teams, and contribute to projects
              that make a real impact.
            </p>
          </div>
        </div>
      </section>

      {/* 💻 Projects Section */}
      <section className="section space-section" id="projects">
        <div className="header caption">
          <h5>My Projects</h5>
        </div>

        <div className="projects-grid">
          {projects.slice(0, 6).map((project, index) => (
            <CardProject
              key={project.id || index}
              Img={project.Img}
              Title={project.title}
              Description={project.description}
              Link={project.link}
              id={project.id}
            />
          ))}
        </div>
      </section>

      {/* 🎮 Interests Section */}
    <section className="section interests-section" id="interests">
    <div className="content-wrapper">
      <div className="header caption mb-6">
        <h5>Interests</h5>
      </div>
      <div className="interests-grid">
        {interests.map((interest, index) => (
          <div key={index} className="interests-card">
            <div className="content-inner">
              <img
                src={interest.icon}
                alt={interest.name}
                className="interests-card-img"
              />
              <span>{interest.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  <section className="section space-section" id="contact">
    <video className="background-video" autoPlay loop muted playsInline>
      <source src={space1} type="video/mp4" />
    </video>
    <div className="header caption">
      <h5>Contact Me</h5>
      <ContactIcons />
    </div>
  </section>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/:id" element={<ProjectDetails />} />
    </Routes>
  );
}

export default App;
