import React from "react";
import "./Contact.scss";
import githubPNG from "../images/github.png";
import facebookPNG from "../images/facebook.png";
import linkedinPNG from "../images/linkedin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Contact = () => (
  <section className="contact">
    <h2 className="contact-header">Contact</h2>
    <h3 className="contact-lead">Interested in working with me? You can reach out to me via...</h3>
    <form id="contact-mail" className="contact-mail" acceptCharset="UTF-8" action="https://usebasin.com/f/8629e959c9a2" method="POST">
      <h3><FontAwesomeIcon icon={faEnvelope} /> EMAIL</h3>
      <label htmlFor="email" className="email-label">Your Email: </label>
      <input id="email" className="email" type="email" name="email" placeholder="Enter your email address..." required />
      <label htmlFor="message" className="mes-label">Your Message: </label>
      <textarea id="message" className="message" name="message" placeholder="Your Message..." rows="4" required></textarea>
      <button className="sendBtn" type="submit" title="Send an Email to Aleks">Send <FontAwesomeIcon icon={faPaperPlane} /></button>
    </form>
    <ul className="socials-list">
      <li className="socials-circle facebook">
        <a href="https://www.facebook.com/aleks.trinhquang" target="_blank" rel="noopener noreferrer">
          <div className="circle-container">
            <div className="outer-ring"></div>
            <div className="outer-outer-ring"></div>
            <div className="circle">
              <div className="front">
                <img className="front-logo" src={facebookPNG} alt="FACEBOOK" />
              </div>
              <div className="back">
                <span>Facebook</span>
              </div>
            </div>
          </div>
        </a>
      </li>
      <li className="socials-circle github">
        <a href="https://github.com/tkhquang" target="_blank" rel="noopener noreferrer">
          <div className="circle-container">
            <div className="outer-ring"></div>
            <div className="outer-outer-ring"></div>
            <div className="circle">
              <div className="front">
                <img className="front-logo" src={githubPNG} alt="GITHUB" />
              </div>
              <div className="back">
                <span>Github</span>
              </div>
            </div>
          </div>
        </a>
      </li>
      <li className="socials-circle linkedin">
        <a href="https://www.linkedin.com/in/quang-trinh-khac-66476517b/" target="_blank" rel="noopener noreferrer">
          <div className="circle-container">
            <div className="outer-ring"></div>
            <div className="outer-outer-ring"></div>
            <div className="circle">
              <div className="front">
                <img className="front-logo" src={linkedinPNG} alt="LINKEDIN" />
              </div>
              <div className="back">
                <span>LinkedIn</span>
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
    <small className="icon-credits">
      Icons made by
      <a
        href="https://www.flaticon.com/packs/nfo@pixelbuddha.net"
        title="Pixel Buddha"
      >
        Pixel Buddha
      </a>
        from
      <a
        href="https://www.flaticon.com/"
        title="Flaticon"
      >
        www.flaticon.com
      </a>
        is licensed by
      <a
        href="http://creativecommons.org/licenses/by/3.0/"
        title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer"
      >
        CC 3.0 BY
      </a>
    </small>
  </section>
);

export default Contact;
