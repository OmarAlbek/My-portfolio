import React from 'react';
import './Contact.css';
import { FaEnvelope, FaBehance, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-title">
  {"Find me".split("").map((char, index) => (
    <span
      key={index}
      className="contact-char"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ))}
</div>

      <div className="contact-card">
        <div className="contact-item" style={{ animationDelay: '0.6s' }}>
          <FaEnvelope className="contact-icon" />
          <a href="mailto:Kaialalbek@gmail.com" target="_blank" rel="noopener noreferrer">
            Email
          </a>
        </div>

        <div className="contact-item" style={{ animationDelay: '0.8s' }}>
          <FaBehance className="contact-icon" />
          <a href="https://www.behance.net/omaralbek" target="_blank" rel="noopener noreferrer">
            Behance
          </a>
        </div>

        <div className="contact-item" style={{ animationDelay: '1s' }}>
          <FaInstagram className="contact-icon" />
          <a href="https://www.instagram.com/omar.albek/" target="_blank" rel="noopener noreferrer">
            OmarAlbek
          </a>
        </div>

        <div className="contact-item" style={{ animationDelay: '1.2s' }}>
          <FaInstagram className="contact-icon" />
          <a href="https://www.instagram.com/omar.de.signer/" target="_blank" rel="noopener noreferrer">
            omar.de.signer
          </a>
        </div>

        <div className="contact-item" style={{ animationDelay: '1.4s' }}>
          <FaLinkedin className="contact-icon" />
          <a href="https://www.linkedin.com/in/omar-albek-3845771bb/" target="_blank" rel="noopener noreferrer">
            Omar Albek
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
