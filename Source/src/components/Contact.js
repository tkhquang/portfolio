import React, { Component } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./Contact.scss";
import githubPNG from "../images/github.png";
import facebookPNG from "../images/facebook.png";
import linkedinPNG from "../images/linkedin.png";
import textCursor from "../images/text-cursor.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane, faCheckCircle, faExclamationCircle  } from "@fortawesome/free-solid-svg-icons";

class Contact extends Component {
  constructor (props) {
    super (props);
    this.recaptchaRef = React.createRef();
    this.state = {
      email: "",
      message: "",
      report: ""
    }
  }
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    });
  }
  handleMessageChange = (e) => {
    this.setState({
      message: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // setTimeout(()=> {
    //   this.setState({
    //     report: ""
    //   });
    // }, 10000)
    this.recaptchaRef.current.execute().then((value) => {
      let formData = new FormData();
      formData.append("email", this.state.email);
      formData.append("message", this.state.message);
      fetch("https://usebasin.com/f/8629e959c9a2",
      {
        body: formData,
        method: "POST"
      }).then(() => {
        this.setState({
          email: "",
          message: "",
          report: "Success"
        });
      }).catch((err) => {
        this.recaptchaRef.current.reset();
        this.setState({
          report: "Error"
        });
      });
    });
  }
  reCAPTCHAExpired = () => {
    this.recaptchaRef.current.reset();
    this.setState({
      report: "Expired"
    });
  }
  reCAPTCHAErrored = () => {
    this.recaptchaRef.current.reset();
    this.setState({
      report: "Error"
    });
  }
  render () {
    return (
      <section className="contact">
        <h2 className="contact-header">Contact</h2>
        <h3 className="contact-lead">Interested in working with me? You can reach out to me via...</h3>
        <form
          id="contact-mail"
          className="contact-mail"
          acceptCharset="UTF-8"
          method="POST"
          action="https://usebasin.com/f/8629e959c9a2"
          onSubmit={this.handleSubmit}
        >
          <h3><FontAwesomeIcon icon={faEnvelope} /> EMAIL</h3>
          <label htmlFor="email" className="email-label">Your Email: </label>
          <input
            id="email"
            className="email"
            type="email"
            name="email"
            placeholder="Enter your email address..."
            required
            onChange={this.handleEmailChange}
            style={{cursor: `url("${textCursor}"), text`}}
          />
          <label htmlFor="message" className="mes-label">Your Message: </label>
          <textarea
            id="message"
            className="message"
            name="message"
            placeholder="Your Message..."
            rows="4"
            required
            onChange={this.handleMessageChange}
            style={{cursor: `url("${textCursor}"), text`}}
          >
          </textarea>
          <ReCAPTCHA
            className="g-recaptcha"
            ref={this.recaptchaRef}
            size="invisible"
            sitekey="6Lew3SMUAAAAAJ82QoS7gqOTkRI_dhYrFy1f7Sqy"
            onExpired={this.reCAPTCHAExpired}
            onErrored={this.reCAPTCHAErrored}
          />
          <button className="sendBtn" type="submit" title="Send an Email to Aleks">Send <FontAwesomeIcon icon={faPaperPlane} /></button>
          <small className="recaptcha-text">
            This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.
          </small>
        </form>
        {
          this.state.report === "Success"
            ?
              <h3 className="submited-report" style={{color: "green"}}>
                <FontAwesomeIcon icon={faCheckCircle} />
                &nbsp;Message sent! I will try to reply to your message within 24 hours.
              </h3>
            :
              this.state.report === "Error"
                ?
                  <h3 className="submited-report" style={{color: "red"}}>
                    <FontAwesomeIcon icon={faExclamationCircle} />
                    &nbsp;Something went wrong, please try sending your message again.
                  </h3>
                :
                  this.state.report === "Expired"
                    ?
                      <h3 className="submited-report" style={{color: "red"}}>
                        <FontAwesomeIcon icon={faExclamationCircle} />
                        &nbsp;ReCAPTCHA Token Expired, please try again.
                      </h3>
                    :
                      <h3 className="submited-report">
                        &nbsp;
                      </h3>
        }
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
  }
}

export default Contact;
