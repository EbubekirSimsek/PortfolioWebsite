import React from "react";
import "./skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faPython,
  faReact,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faDatabase,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Skills = () => {
  const frontendSkills = [
    { name: "JavaScript", level: "Expert", icon: faJs },
    { name: "React", level: "Intermediate", icon: faReact },
    { name: "HTML/CSS", level: "Expert", icon: faHtml5 },
  ];

  const backendSkills = [
    { name: "Python", level: "Advanced", icon: faPython },
    { name: "Node.js", level: "Intermediate", icon: faCode },
    { name: "Database", level: "Intermediate", icon: faDatabase },
    { name: "Server Management", level: "Intermediate", icon: faServer },
  ];

  const renderSkills = (skills) => {
    return skills.map((skill, index) => (
      <div key={index} className="skill">
        <FontAwesomeIcon icon={skill.icon} className="icon" />
        <h3>{skill.name}</h3>
        <p>{skill.level}</p>
      </div>
    ));
  };

  return (
    <div className="skills-container">
      <h2 className="h2">Skills</h2>
      <div className="row">
        <div className="col-md-6">
          <h3>Frontend</h3>
          {renderSkills(frontendSkills)}
        </div>
        <div className="col-md-6">
          <h3>Backend</h3>
          {renderSkills(backendSkills)}
        </div>
      </div>
      {/* Add extra space between Frontend and Backend */}
      <div className="mb-5"></div>
    </div>
  );
};

export default Skills;
