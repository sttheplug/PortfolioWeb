import React, { useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import "./App.css";
import "./Projects.css";
import "./Interests.css";
import TypingText from "./TypingText";
import CardProject from "./CardProject.js"
import oceanbg from "./videos/oceanbg.mp4";
import grafana from "./assets/grafana.png";
import nback from "./assets/nbackgame.jpg";
import auction from "./assets/auctionplatform.jpg";
import sportpulseweb from "./assets/sportpulse.jpg";
import journalsystem from "./assets/journalsystem.jpg";
import portfolio from "./assets/portfolio.png";
import devIcon from "./assets/software.png";
import gamingIcon from "./assets/gaming.png"
import financeIcon from "./assets/finance.png";
import pianoIcon from "./assets/piano.png";
import fitnessIcon from "./assets/fitness.png";
import travelIcon from "./assets/travel.png";


function App() {
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

  // ✅ Use the imported images here
  const projects = [
    {
      id: 1,
      title: "N-Back",
      description: "A cognitive training game that boosts memory and focus.",
      link: "https://github.com/sttheplug/N-Back",
      Img: nback,
    },
    {
      id: 2,
      title: "JournalSystem",
      description: "A full-stack journaling app with Spring Boot and React.",
      link: "https://github.com/sttheplug/JournalSystem",
      Img: journalsystem,
    },
    {
      id: 3,
      title: "AuctionPlatform",
      description:
        "An ASP.NET Core MVC app for online auctions, built on Entity Framework.",
      link: "https://github.com/sttheplug/AuctionPlatform",
      Img: auction,
    },
    {
      id: 4,
      title: "CrateFlow",
      description:
        "A SpringBoot microservice monitor using Micrometer, InfluxDB, and Grafana.",
      link: "https://github.com/sttheplug/CrateFlow",
      Img: grafana,
    },
    {
      id: 5,
      title: "SportPulseWeb",
      description:
        "A web app for real-time sports performance using Polar Verity Sense data.",
      link: "https://github.com/sttheplug/SportPulseWeb",
      Img: sportpulseweb,
    },
    {
      id: 6,
      title: "PortfolioWeb",
      description:
        "A responsive React portfolio showcasing my projects, skills, and GitHub work with a modern design.",
      link: "https://github.com/sttheplug/PortfolioWeb",
      Img: portfolio,
    },
  ];

  return (
    <div>
      {/* Navigation Bar */}
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
          <a href="#interests" className={activeSection === "interests" ? "active" : ""}>
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
            <a href="/CV.pdf" download className="btn">
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

      <section className="section interests-section relative overflow-hidden" id="interests">
      <div className="content-wrapper relative z-10 flex flex-col items-center">
        <div className="header caption mb-6">
          <h5>Interests</h5>
        </div>

        <div className="interests-grid grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: "Software", icon: devIcon },
            { name: "Gaming", icon: gamingIcon },
            { name: "Finance", icon: financeIcon },
            { name: "Piano", icon: pianoIcon },
            { name: "Fitness", icon: fitnessIcon },
            { name: "Travel", icon: travelIcon },
          ].map((interest, index) => (
            <div
              key={index}
              className="interests-card flex flex-col items-center justify-center w-40 h-40 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={interest.icon}
                alt={interest.name}
                className="w-16 h-16 mb-2 object-contain"
              />
              <span className="text-center font-medium text-sm">{interest.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>


      {/* 📬 Contact Section */}
      <section className="section space-section" id="contact">
        <div className="header caption">
          <h5>Contact</h5>
        </div>
      </section>
    </div>
  );
}

export default App;
