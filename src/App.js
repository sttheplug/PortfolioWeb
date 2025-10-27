import React, { useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa"; 
import "./App.css";
import "./Projects.css";
import TypingText from "./TypingText";
import CardProject from './CardProject.js'; 
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

const projects = [
  {
    title: 'N-Back',
    description:
      'A cognitive training game that boosts memory and focus using visual and auditory pattern recognition challenges.',
    link: 'https://github.com/sttheplug/N-Back',
    Img: '/images/projects/nback.png', // 🧠 Brain-training app image
  },
  {
    title: 'JournalSystem',
    description:
      'A full-stack journaling app with Spring Boot and React, featuring secure login and role-based entry management.',
    link: 'https://github.com/sttheplug/JournalSystem',
    Img: '/images/projects/journalsystem.png', // 📔 Journal or diary-style image
  },
  {
    title: 'AuctionPlatform',
    description:
      'An ASP.NET Core MVC app for online auctions with bidding, user management, and admin tools built on Entity Framework.',
    link: 'https://github.com/sttheplug/AuctionPlatform',
    Img: '/images/projects/auctionplatform.png', // 🏷️ Auction or bidding graphic
  },
  {
    title: 'CrateFlow',
    description:
      'A Spring Boot microservice monitor using Micrometer, InfluxDB, and Grafana to track performance and business metrics.',
    link: 'https://github.com/sttheplug/CrateFlow',
    Img: '/grafana.png'
  },
  {
    title: 'SportPulseWeb',
    description:
      'A web app that tracks Polar Verity Sense heart rate and motion data for real-time sports performance analysis.',
    link: 'https://github.com/sttheplug/SportPulseWeb',
    Img: '/images/projects/sportpulseweb.png', // ❤️ Fitness or heart rate image
  },
  {
    title: 'PortfolioWeb',
    description:
      'A responsive React portfolio showcasing my projects, skills, and GitHub work with a modern design.',
    link: 'https://github.com/sttheplug/PortfolioWebsite',
    Img: '/images/projects/portfolioweb.png', // 💻 Portfolio or design image
  },
];




  return (
    <div>
      {/* Navigation Bar */}
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
              <FaDownload style={{ marginRight: "8px", verticalAlign: "middle" }} />
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
          {/* LEFT SIDE - PHOTO */}
          <div className="about-photo"></div>

          {/* RIGHT SIDE - TEXT BOX */}
          <div className="about-box">
            <h1 className="section-title">About Me</h1>
            <p>
              Hi, I’m <strong>Simon Tekle Tesfatsion</strong>, a recent Computer Science graduate from KTH.
              I’m passionate about software development, DevOps, and cloud technologies, and I love turning
              complex problems into elegant, working solutions.
            </p>
            <p>
              When I’m not coding, you’ll find me exploring finance charts, trading, or hitting the gym to
              debug my workout routine. I’m eager to learn, collaborate with great teams, and contribute to
              projects that make a real impact.
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
            Title={project.title || project.Title}
            Description={project.description || project.Description}
            Link={project.link || project.Link}
            id={project.id}
          />
        ))}
      </div>
    </section>

      {/* ⚙️ Skills Section */}
      <section className="section space-section" id="skills">
        <div className="header caption">
          <h5>Skills</h5>
        </div>

        <div className="skills-grid">
          <div className="skill-card">React</div>
          <div className="skill-card">Java Spring Boot</div>
          <div className="skill-card">ASP.NET Core</div>
          <div className="skill-card">Node.js</div>
          <div className="skill-card">Docker & Kubernetes</div>
          <div className="skill-card">SQL</div>
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
