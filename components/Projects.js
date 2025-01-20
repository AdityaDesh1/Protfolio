import React from "react";
// import ProjectCard from "./ProjectCard";
import "./Projects.css";

// const ProjectsData = [
//   {
//     title: 'project one',
//     description: 'This is a project one description.',
//     link: 'https://github.com/AdityaDesh1/Expense-Tracker' ,

//   }
// ]

const Projects = () => {
  return (
    <div className="projects-section">
      {/* <div className="my-projects"> */}
      <h2 className="resume-title">MY PROJECTS</h2>
      <p className="resume-description">
        I possess a robust understanding of front-end development, particularly
        in HTML, CSS, and JavaScript. Currently, I am expanding my expertise by
        diving into React.js and engaging in diverse React-based projects.
        Although my experience with large-scale projects is limited, I have
        successfully completed several mini-projects that showcase my
        capabilities and potential. As a dedicated self-learner, I am passionate
        about continuous improvement and thrive on tackling new challenges. My
        proactive approach and eagerness to learn enable me to quickly adapt and
        contribute effectively. I am confident that my skills and enthusiasm
        will make a meaningful impact on our team.
      </p>
    </div>
    // </div>
  );
};

export default Projects;
