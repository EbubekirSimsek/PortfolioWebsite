import React from "react";
import "./projects.css";
import Skills from "./skills";
import Timeline from "./timeline.jsx";

const Projects = () => {
  return (
    <div className="projects">
      <div className="timeline">
        <Timeline />
      </div>
      <div className="skills">
        <Skills />
      </div>
    </div>
  );
};

export default Projects;
