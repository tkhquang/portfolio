import React from "react";
import Fade from "react-reveal/Fade";
import "./Projects.scss";
//== <Component
import PageImageLoaded from "../HOCs/PageImageLoaded";
import Loading from "./Loading";
//== Component>
//== <Media
import pokemonCardViewer from "../images/pokemon-card-viewer.png";
import contactList from "../images/contact-list.png";
import javascriptCalculator from "../images/javascript-calculator.png";
import pomodoroClock from "../images/pomodoro-clock.png";
import drumMachine from "../images/drum-machine.png";
import randomQuoteMachine from "../images/random-quote-machine.png";
//== Media>

const imgObj = {
  pokemonCardViewer,
  contactList,
  javascriptCalculator,
  pomodoroClock,
  drumMachine,
  randomQuoteMachine
};

const Projects = (props) => {
  const loadedImgObj = props.loadedImgObj;
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
          <li className="project-tile">
            <Fade left>
              <a className="img-link" href="https://tkhquang.github.io/pokemon-card-viewer/" target="_blank" rel="noopener noreferrer">
                <img src={loadedImgObj.pokemonCardViewer} alt="Project Tile Preview" />
              </a>
            </Fade>
            <Fade right>
              <div className="desc">
                <h3>Pokémon Card Viewer</h3>
                <div className="skills-use">
                  <span className="html">HTML</span>
                  <span className="css">CSS</span>
                  <span className="reactjs">ReactJS</span>
                  <span className="redux">Redux</span>
                </div>
                <div className="buttons">
                  <a href="https://tkhquang.github.io/pokemon-card-viewer/" target="_blank" rel="noopener noreferrer">Visit</a>
                  <a href="https://github.com/tkhquang/pokemon-card-viewer-source" target="_blank" rel="noopener noreferrer">Source</a>
                </div>
              </div>
            </Fade>
          </li>
          <li className="project-tile">
              <Fade left>
                <a className="img-link" href="https://tkhquang.github.io/contactlist/" target="_blank" rel="noopener noreferrer">
                  <img src={loadedImgObj.contactList} alt="Project Tile Preview" />
                </a>
              </Fade>
              <Fade right>
                <div className="desc">
                  <h3>Contact List App</h3>
                  <div className="skills-use">
                    <span className="html">HTML</span>
                    <span className="css">CSS</span>
                    <span className="reactjs">ReactJS</span>
                    <span className="redux">Redux</span>
                  </div>
                  <div className="buttons">
                    <a href="https://tkhquang.github.io/contactlist/" target="_blank" rel="noopener noreferrer">Visit</a>
                    <a href="https://github.com/tkhquang/contactlist-source" target="_blank" rel="noopener noreferrer">Source</a>
                  </div>
                </div>
              </Fade>
          </li>
          <li className="project-tile">
              <Fade left>
                <a className="img-link" href="https://tkhquang.github.io/simple-reactjs-calculator/" target="_blank" rel="noopener noreferrer">
                  <img src={loadedImgObj.javascriptCalculator} alt="Project Tile Preview" />
                </a>
              </Fade>
              <Fade right>
                <div className="desc">
                  <h3>Javascript Calculator</h3>
                  <div className="skills-use">
                    <span className="html">HTML</span>
                    <span className="scss">SCSS</span>
                    <span className="reactjs">ReactJS</span>
                  </div>
                  <div className="buttons">
                    <a href="https://tkhquang.github.io/simple-reactjs-calculator/" target="_blank" rel="noopener noreferrer">Visit</a>
                    <a href="https://github.com/tkhquang/simple-reactjs-calculator" target="_blank" rel="noopener noreferrer">Source</a>
                  </div>
                </div>
              </Fade>
          </li>
          <li className="project-tile">
              <Fade left>
                <a className="img-link" href="https://tkhquang.github.io/jquery-pomodoro-clock/" target="_blank" rel="noopener noreferrer">
                  <img src={loadedImgObj.pomodoroClock} alt="Project Tile Preview" />
                </a>
              </Fade>
              <Fade right>
                <div className="desc">
                  <h3>Pomodoro Clock</h3>
                  <div className="skills-use">
                    <span className="html">HTML</span>
                    <span className="css">CSS</span>
                    <span className="jquery">jQuery</span>
                  </div>
                  <div className="buttons">
                    <a href="https://tkhquang.github.io/jquery-pomodoro-clock/" target="_blank" rel="noopener noreferrer">Visit</a>
                    <a href="https://github.com/tkhquang/jquery-pomodoro-clock" target="_blank" rel="noopener noreferrer">Source</a>
                  </div>
                </div>
              </Fade>
          </li>
          <li className="project-tile">
              <Fade left>
                <a className="img-link" href="https://codepen.io/tkhquang/full/GPvYVL" target="_blank" rel="noopener noreferrer">
                  <img src={loadedImgObj.drumMachine} alt="Project Tile Preview" />
                </a>
              </Fade>
              <Fade right>
                <div className="desc">
                  <h3>Drum Machine</h3>
                  <div className="skills-use">
                    <span className="html">HTML</span>
                    <span className="scss">SCSS</span>
                    <span className="reactjs">ReactJS</span>
                  </div>
                  <div className="buttons">
                    <a href="https://codepen.io/tkhquang/full/GPvYVL" target="_blank" rel="noopener noreferrer">Visit</a>
                    <a href="https://codepen.io/tkhquang/pen/GPvYVL" target="_blank" rel="noopener noreferrer">Source</a>
                  </div>
                </div>
              </Fade>
          </li>
          <li className="project-tile">
              <Fade left>
                <a className="img-link" href="https://codepen.io/tkhquang/full/bORoQV" target="_blank" rel="noopener noreferrer">
                  <img src={loadedImgObj.randomQuoteMachine} alt="Project Tile Preview" />
                </a>
              </Fade>
              <Fade right>
                <div className="desc">
                  <h3>Random Quote Machine</h3>
                  <div className="skills-use">
                    <span className="html">HTML</span>
                    <span className="scss">SCSS</span>
                    <span className="bootstrap">Bootstrap</span>
                    <span className="jquery">jQuery</span>
                  </div>
                  <div className="buttons">
                    <a href="https://codepen.io/tkhquang/full/bORoQV" target="_blank" rel="noopener noreferrer">Visit</a>
                    <a href="https://codepen.io/tkhquang/pen/bORoQV" target="_blank" rel="noopener noreferrer">Source</a>
                  </div>
                </div>
              </Fade>
          </li>
        </ul>
        :
        <Loading />
      }
    </section>
  );
}

export default PageImageLoaded(Projects, imgObj);
