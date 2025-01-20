import React from "react";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import "./Home.css";
import Snaps from "./Snaps";
import MyWork from "./MyWork";
import Certifications from "./Certification";
import CeftDetails from "./CeftDetails";

const Home = () => {
  return (
    <div className="front-end-section">
      {/* <div className="front-end-content"> */}
      <h1 className="front-end-title">Front End Developer</h1>
      <p className="front-end-description">
        Enthusiastic and motivated with a solid foundation in ReactJS, HTML,
        CSS, Core Java, SQL and JavaScript. Eager to leverage academic training
        to contribute effectively to a dynamic team. Passionate about creating
        responsive and user-friendly web experiences. Proven ability to learn
        quickly and apply new technologies effectively. As a fresher, I am keen
        to bring my knowledge and skills to a professional setting, where I can
        continue to grow and develop. I am dedicated to delivering high-quality
        work and am excited to collaborate with experienced professionals to
        achieve innovative solutions. My academic projects have honed my ability
        to troubleshoot, problem-solve, and deliver results in a timely manner.
        Ready to take on new challenges and contribute to the success of the
        team.
      </p>
      {/* </div> */}
      <div>
        <Resume />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Snaps />
      </div>
      <div>
        <MyWork />
      </div>
      <div>
        <Certifications />
      </div>
      <div>
        <CeftDetails />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
