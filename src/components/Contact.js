import React, { Component, Fragment } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./Contact.scss";
//== <Component
import PageImageLoaded from "../HOCs/PageImageLoaded";
import Loading from "./Loading";
//== Component>
//== <Media
import githubPNG from "../images/github.png";
import facebookPNG from "../images/facebook.png";
import linkedinPNG from "../images/linkedin.png";
import textCursor from "../images/text-cursor.png";
//== Media>
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane, faCheckCircle, faExclamationCircle  } from "@fortawesome/free-solid-svg-icons";

const imgObj = {
  githubPNG,
  facebookPNG,
  linkedinPNG,
  textCursor
};

class Contact extends Component {
  constructor (props) {
    super (props);
    this.recaptchaRef = React.createRef();
    this.state = {
      fetching: false,
      email: "",
      message: "",
      report: ""
    }
  }
  handleInputOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.recaptchaRef.current.execute();
  }
  reCAPTCHAErrored = () => {
    this.recaptchaRef.current.reset();
    this.setState({
      report: "Error"
    });
  }
  reCAPTCHAExpired = () => {
    this.recaptchaRef.current.reset();
    this.setState({
      report: "Expired"
    });
  }
  reCAPTCHAResoved = () => {
    let formData = new FormData();
    formData.append("email", this.state.email);
    formData.append("message", this.state.message);
    this.setState({
      fetching: true,
    });
    fetch("https://usebasin.com/f/8629e959c9a2", {
      body: formData,
      method: "POST"
    }).then(() => {
      this.setState({
        fetching: false,
        email: "",
        message: "",
        report: "Success"
      });
    }).catch((err) => {
      this.recaptchaRef.current.reset();
      this.setState({
        fetching: false,
        report: "Error"
      });
    });
  }
  componentDidMount () {
    window.recaptchaOptions = {
      removeOnUnmount: true
    };
  }
  render () {
    const loadedImgObj = this.props.loadedImgObj;
    const socialList = [
      {
        type: "Facebook",
        href: "https://www.facebook.com/aleks.trinhquang",
        imgSrc: loadedImgObj.facebookPNG
      },
      {
        type: "Github",
        href: "https://github.com/tkhquang",
        imgSrc: loadedImgObj.githubPNG
      },
      {
        type: "LinkedIn",
        href: "https://www.linkedin.com/in/quang-trinh-khac-66476517b/",
        imgSrc: loadedImgObj.linkedinPNG
      }
    ];
    return (
      <section className="contact">
        <h2 className="contact-header">
          {
            this.props.isPageImgLoaded(imgObj)
            ?
            "Contact"
            :
            "Loading..."
          }
        </h2>
        {
          this.props.isPageImgLoaded(imgObj)
          ?
          <Fragment>
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
                onChange={this.handleInputOnChange}
                value={this.state.email}
                style={{cursor: `url("${loadedImgObj.textCursor}"), text`}}
              />
              <label htmlFor="message" className="mes-label">Your Message: </label>
              <textarea
                id="message"
                className="message"
                name="message"
                placeholder="Your Message..."
                rows="4"
                required
                onChange={this.handleInputOnChange}
                value={this.state.message}
                style={{cursor: `url("${textCursor}"), text`}}
              >
              </textarea>
              <ReCAPTCHA
                className="g-recaptcha"
                ref={this.recaptchaRef}
                size="invisible"
                sitekey="6Lew3SMUAAAAAJ82QoS7gqOTkRI_dhYrFy1f7Sqy"
                onErrored={this.reCAPTCHAErrored}
                onExpired={this.reCAPTCHAExpired}
                onChange={this.reCAPTCHAResoved}
              />
              <button
                className="sendBtn"
                type="submit"
                title="Send an Email to Aleks"
                disabled={
                  this.state.fetching ? true : false
                }
              >
                {
                  this.state.fetching
                  ?
                  "Sending..."
                  :
                  <span>
                    Send <FontAwesomeIcon icon={faPaperPlane} />
                  </span>
                }
              </button>
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
              {socialList.map(({ type, href, imgSrc }) => (
                <li className={`socials-circle ${type.toLocaleLowerCase()}`} key={type}>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <div className="circle-container">
                      <div className="outer-ring"></div>
                      <div className="outer-outer-ring"></div>
                      <div className="circle">
                        <div className="front">
                          <img className="front-logo" src={imgSrc} alt={type} />
                        </div>
                        <div className="back">
                          <span>{type}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
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
          </Fragment>
          :
          <Loading />
        }
      </section>
    );
  }
}

export default PageImageLoaded(Contact, imgObj);