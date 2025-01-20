import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-section">
      <p className="resume-text">
        Get to know me better, download my resume here!
      </p>
      <a
        href="https://drive.google.com/file/d/1BrREwmXjP-0xbL8vbO2p1bylRBUtPo1z/view?usp=drive_link"
        download
        className="resume-button"
      >
        Download resume
      </a>
    </div>
  );
};

export default Resume;
