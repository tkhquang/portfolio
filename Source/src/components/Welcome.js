import React from "react";
import "./Welcome.scss";

const Welcome = (props) => {
  const scrollToAbout = () => {
    window.scrollTo({
      top: document.getElementById("about").offsetTop,
      behavior: "smooth"
    });
  };
  return (
    <section
      className="welcome"
      style={
        {
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.welcomeJPG})`
        }
      }
    >
      <div className="welcome-header">
        <h2>Hello! My name is Aleks</h2>
      </div>
      <div className="welcome-text">
          <p className="top">
            I am a Front-End Developer
          </p>
          <p className="bottom">
            I love building websites that <span>function</span> yet remain <span>minimalist</span>
          </p>
      </div>
      <div onClick={scrollToAbout} className="arrow-down">
        <img src={props.arrowDownPNG} alt="Down Button" />
      </div>
    </section>
  );
}

export default Welcome;
