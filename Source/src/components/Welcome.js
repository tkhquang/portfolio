import React from "react";
import "./Welcome.scss";
import arrowDownPNG from "../images/arrow_down.png";

const Welcome = (props) => (
  <section
    className="welcome"
    style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.image})`}}
  >
    <div className="welcome-header">
      <h2>Hello! My name is Aleks</h2>
    </div>
    <div className="welcome-text">
        <p className="top">
          I am a Front-End Developer
        </p>
        <p className="bottom">
          I love building websites that<span>function</span> yet remain <span>minimalist</span>
        </p>
    </div>
    <a href="#about" className="arrow-down">
      <img src={arrowDownPNG} alt="Down Button" />
    </a>
  </section>
);

export default Welcome;
