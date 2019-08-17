import React from "react";
import Fade from "react-reveal/Fade";
import "./Skills.scss";


const Skills = (props) => {
  const skillList = [
    {
      position: "left",
      imgSrc: props.HTML5,
      text: "HTML5"
    },
    {
      position: null,
      imgSrc: props.CSS3,
      text: "CSS3"
    },
    {
      position: "right",
      imgSrc: props.JS,
      text: "JavaScript"
    },
    {
      position: "left",
      imgSrc: props.Bootstrap,
      text: "Bootstrap"
    },
    {
      position: null,
      imgSrc: props.Jquery,
      text: "JQuery"
    },
    {
      position: "right",
      imgSrc: props.ReactJS,
      text: "ReactJS"
    }
  ];
  return (
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
        {skillList.map((skill) => (
          <li key={skill.text}>
            <Fade {...skill.position && { [skill.position]: true }}>
              <img src={skill.imgSrc} alt={skill.text} />
              <span>{skill.text}</span>
            </Fade>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
