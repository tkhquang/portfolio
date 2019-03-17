import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "./About.scss";
import AleksPNG from "../images/Aleks.png";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  openLightBox = () => {
    this.setState({
      isOpen: true
    });
  }
  closeLightBox = () => {
    this.setState({
      isOpen: false
    });
  }
  render() {
    return (
      <section id="about" className="about">
        <h2 className="about-header">About Aleks</h2>
        <div className="about-pic">
          <img src={AleksPNG} alt="Aleks Quang Trịnh" onClick={this.openLightBox} />
          {this.state.isOpen
            && <Lightbox
                  mainSrc={AleksPNG}
                  onCloseRequest={this.closeLightBox}
                  imageCaption="Aleks Quang Trịnh"
                />
          }
        </div>
        <p>
          My full name is Quang Trinh Khac, but you can call me Aleks. I am a former student of the Advanced Education Program (AEP) in Information System at Ho Chi Minh City University of Information Technology. However, for some inexplicable reason, I have not finished my degree yet.
        </p>
        <p>
          I am a highly motivated, self-starting developer with a good understanding of HTML, CSS, JavaScript and
          modern JS libraries such as ReactJS, Redux, jQuery,... seeking to launch a career building web applications and
          services. The work I provide is of highest quality, fully responsive, and well-tested in a wide variety of devices. The code I write is easy to maintain because it is clean, concise and ordered.
        </p>
        <p>Do not hesitate to get in touch with me if you are looking for a developer who can provide:</p>
        <ul>
          <li>Semantic HTML/Responsive CSS</li>
          <li>JavaScript (Vanilla, jQuery, ReactJS,...)</li>
          <li>High-level user experience</li>
          <li>Best practices</li>
          <li>Git</li>
          <li>Agile/Scrums (Software development)</li>
        </ul>
      </section>
    );
  }
}

export default About;
