import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Contact.css";
import logo from "./Images/logo.png";

const Contact = () => {
  return (
    <div className="contact-section">
      <h1 className="contact-title">CONTACT ME</h1>
      <div className="contact-info">
        <a href="mailto:adityadeshpande1999@gmail.com" className="contact-link">
          <i className="fa-solid fa-envelope"></i> Email -
          adityadeshpande1999@gmail.com
        </a>
        <a href="tel:7337732018" className="contact-link">
          <i className="fa-solid fa-mobile-screen"></i> Call me at - 7337732018
        </a>
        <a
          href="https://www.linkedin.com/in/aditya-deshpande-5921311b9/"
          className="contact-link"
        >
          <i className="fa-brands fa-linkedin"></i> LinkedIn - Aditya Deshpande
        </a>
      </div>
      <div className="footer-section">
        <div className="logo-section">
          <img src={logo} alt="logo" className="cc-logo" />
        </div>
        <a
          href="https://drive.google.com/file/d/1BrREwmXjP-0xbL8vbO2p1bylRBUtPo1z/view?usp=drive_link"
          className="download-resume"
        >
          Download resume
        </a>
      </div>
    </div>
  );
};

export default Contact;
