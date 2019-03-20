import React from "react";
import Fade from "react-reveal/Fade";
import "./Skills.scss";

const Skills = (props) => (
  <section
    className="skills"
    style={
      {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.backgroundJPG})`
      }
    }
    >
    <h2 className="skills-header">Skills</h2>
    <ul className="skills-list">
      <li>
        <Fade left>
          <img src={props.HTML5} alt="HTML5" />
          <span>HTML5</span>
        </Fade>
      </li>
      <li>
        <Fade>
          <img src={props.CSS3} alt="CSS3" />
          <span>CSS3</span>
        </Fade>
      </li>
      <li>
        <Fade right>
          <img src={props.JS} alt="JavaScript" />
          <span>JavaScript</span>
        </Fade>
      </li>
      <li>
        <Fade left>
          <img src={props.Bootstrap} alt="Bootstrap" />
          <span>Bootstrap</span>
        </Fade>
      </li>
      <li>
        <Fade>
          <img src={props.Jquery} alt="JQuery" />
          <span>jQuery</span>
        </Fade>
      </li>
      <li>
        <Fade right>
          <img src={props.ReactJS} alt="ReactJS" />
          <span>ReactJS</span>
        </Fade>
      </li>
    </ul>
  </section>
);

export default Skills;
