import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import "./Contact.css";

function ContactIcons() {
  const contacts = [
    { icon: <FaEnvelope />, label: "Email", link: "mailto:simon.tekle823@outlook.com" },
    { icon: <FaGithub />, label: "GitHub", link: "https://github.com/sttheplug" },
    { icon: <FaLinkedin />, label: "LinkedIn", link: "https://www.linkedin.com/in/simon-tekle-b1b500299/" },
  ];

  return (
    <div className="section-button-group-wrapper">
      <div className="section-button-group">
        {contacts.map(({ icon, label, link }) => (
          <div className="contact-item" key={label}>
            <a
              href={link}
              target={link.startsWith("http") ? "_blank" : undefined}
              rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
              className="contact-btn"
            >
              {icon}
            </a>
            <span className="contact-label">{label}</span>
          </div>
        ))}
      </div>
      <div className="phone-label">
        <FaPhone style={{ marginRight: "0.5rem" }} />
        <span>+46 73 722 93 60</span>
      </div>
    </div>
  );
}

export default ContactIcons;
