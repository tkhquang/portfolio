import React from "react";
import Fade from "react-reveal/Fade";
import "./Projects.scss";
//== <Component
import PageImageLoaded from "../HOCs/PageImageLoaded";
import Loading from "./Loading";
//== Component>
//== <Media
import pokemonCardViewer from "../images/pokemon-card-viewer.png";
import javascriptCalculator from "../images/javascript-calculator.png";
import pomodoroClock from "../images/pomodoro-clock.png";
import drumMachine from "../images/drum-machine.png";
import randomQuoteMachine from "../images/random-quote-machine.png";
//== Media>

const imgObj = {
  pokemonCardViewer,
  javascriptCalculator,
  pomodoroClock,
  drumMachine,
  randomQuoteMachine
};

const Projects = (props) => {
  const loadedImgObj = props.loadedImgObj;
  const projectList = [
    {
      href: "https://tkhquang.github.io/pokemon-card-viewer/",
      source: "https://github.com/tkhquang/pokemon-card-viewer/tree/gh-pages/Source",
      imgSrc: loadedImgObj.pokemonCardViewer,
      text: "Pokémon Card Viewer",
      skillsUse: [
        "HTML",
        "CSS",
        "ReactJS",
        "Redux"
      ]
    },
    {
      href: "https://tkhquang.github.io/simple-reactjs-calculator/",
      source: "https://github.com/tkhquang/simple-reactjs-calculator",
      imgSrc: loadedImgObj.javascriptCalculator,
      text: "Javascript Calculator",
      skillsUse: [
        "HTML",
        "SCSS",
        "ReactJS"
      ]
    },
    {
      href: "https://tkhquang.github.io/jquery-pomodoro-clock/",
      source: "https://github.com/tkhquang/jquery-pomodoro-clock",
      imgSrc: loadedImgObj.pomodoroClock,
      text: "Pomodoro Clock",
      skillsUse: [
        "HTML",
        "CSS",
        "jQuery"
      ]
    },
    {
      href: "https://codepen.io/tkhquang/full/GPvYVL",
      source: "https://codepen.io/tkhquang/pen/GPvYVL",
      imgSrc: loadedImgObj.drumMachine,
      text: "Drum Machine",
      skillsUse: [
        "HTML",
        "SCSS",
        "ReactJS"
      ]
    },
    {
      href: "https://codepen.io/tkhquang/full/bORoQV",
      source: "https://codepen.io/tkhquang/pen/bORoQV",
      imgSrc: loadedImgObj.randomQuoteMachine,
      text: "Random Quote Machine",
      skillsUse: [
        "HTML",
        "SCSS",
        "jQuery",
        "Bootstrap"
      ]
    }
  ];
  return (
    <section className="projects">
      <h2 className="projects-header">
        {
          props.isPageImgLoaded(imgObj)
          ?
          "Projects"
          :
          "Loading..."
        }
      </h2>
      {
        props.isPageImgLoaded(imgObj)
        ?
        <ul className="project-list">
          {projectList.map((project) => (
            <li className="project-tile" key={project.href}>
              <Fade left>
                <a className="img-link" href={project.href} target="_blank" rel="noopener noreferrer">
                  <img src={project.imgSrc} alt={project.text} />
                </a>
              </Fade>
              <Fade right>
                <div className="desc">
                  <h3>{project.text}</h3>
                  <div className="skills-use">
                    {project.skillsUse.map((skill) => (
                      <span className={skill.toLocaleLowerCase()} key={skill}>{skill}</span>
                    ))}
                  </div>
                  <div className="buttons">
                    <a href={project.href} target="_blank" rel="noopener noreferrer">Visit</a>
                    <a href={project.source} target="_blank" rel="noopener noreferrer">Source</a>
                  </div>
                </div>
              </Fade>
          </li>
          ))}
        </ul>
        :
        <Loading />
      }
    </section>
  );
}

export default PageImageLoaded(Projects, imgObj);
