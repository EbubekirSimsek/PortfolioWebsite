import React from "react";
import "./skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faPython,
  faReact,
  faHtml5,
  faJava,
  faFigma,
  faWordpress,
  faSquarespace,
  faWix,
  faWeebly,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faDatabase } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Skills = () => {
  const frontendSkills = [
    { name: "JavaScript", level: "Intermediate", icon: faJs },
    { name: "React", level: "Intermediate", icon: faReact },
    { name: "HTML/CSS", level: "Advanced", icon: faHtml5 },
    { name: "Figma", level: "Advanced", icon: faFigma },
  ];

  const backendSkills = [
    { name: "Python", level: "Intermediate", icon: faPython },
    { name: "C#", level: "Basic", icon: faCode },
    { name: "Database", level: "Basic", icon: faDatabase },
    { name: "Java", level: "Advanced", icon: faJava },
  ];

  const webDevelopment = [
    { name: "Wordpress", level: "Advanced", icon: faWordpress },
    { name: "Squarespace", level: "Advanced", icon: faSquarespace },
    { name: "Wix", level: "Advanced", icon: faWix },
    { name: "Weebly", level: "Intermediate", icon: faWeebly },
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
      <h2 className="h2">My skills</h2>
      <div className="row">
        <div
          className="col-md-4"
          style={{ paddingLeft: "20px", padding: "5vh" }}
        >
          <h3 className="h3">Frontend</h3>
          {renderSkills(frontendSkills)}
        </div>
        <div
          className="col-md-4"
          style={{ paddingLeft: "20px", padding: "5vh" }}
        >
          <h3 className="h3">Backend</h3>
          {renderSkills(backendSkills)}
        </div>
        <div
          className="col-md-4"
          style={{ paddingLeft: "20px", padding: "5vh" }}
        >
          <h3 className="h3">Web Development Platforms</h3>
          {renderSkills(webDevelopment)}
        </div>
      </div>
    </div>
  );
};

export default Skills;
