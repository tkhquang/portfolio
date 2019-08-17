import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => {
  // Open to offer or not
  const status = true;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const date = new Date();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const handleLinkClick = () => {
    if (props.history.location.pathname === props.location.pathname) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };
  const replaceNeeded = (linkTo) => props.location.pathname === linkTo;
  const bottomNavs = [
    {
      to: "/",
      header: "About",
      content: "Learn about Aleks's background and technical skills"
    },
    {
      to: "/projects/",
      header: "Portfolio",
      content: "View Aleks's web development projects"
    },
    {
      to: "/",
      header: "Personal Blog",
      content: "Aleks's personal blog"
    },
    {
      to: "/contact/",
      header: "Contact",
      content: "Get in touch with Aleks"
    }
  ];
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-content">
          <div className="author">
            <div className="author-photos">
              <img className="author-avatar" src={props.AleksPNG} alt="Aleks" />
              <img className="author-logo" src={props.fePNG} alt="" />
            </div>
            <div className="bio">
                <p className="bio-info">Highly motivated, self-starting developer with a good understanding of HTML, CSS, JavaScript and modern JS libraries such as ReactJS, Redux, jQuery,... seeking to launch a career building web applications and services.</p>
                <p>Front-end Developer.</p>
                {status
                  ?
                  <p>
                    Available {month} {year}.
                    <Link
                      to="/contact/"
                      title="Enquire about hiring Aleks"
                      className="hire-button"
                      onClick={handleLinkClick}
                      replace={replaceNeeded("/contact/")}
                    >
                      Hire Now
                      <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </Link>
                  </p>
                  :
                  <p style={{color: "red"}}>
                    NOT Available {month} {year}.
                    <button
                      className="hire-button"
                      type="button" title="Aleks is currently not open to offers"
                      style={{color: "#777", cursor: "not-allowed"}}
                      disabled
                    >
                      Hire Now
                      <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </button>
                  </p>
                }
            </div>
          </div>
          <ul className="social-links">
            <li>
              <a href="https://www.facebook.com/aleks.trinhquang" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="social-icon" icon={faFacebook} />
              </a>
              <p>Contact Aleks via <a href="https://www.facebook.com/aleks.trinhquang" target="_blank" rel="noopener noreferrer">Facebook</a> if you have any question</p>
            </li>
            <li>
              <a href="https://github.com/tkhquang/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="social-icon" icon={faGithub} />
              </a>
              <p>View <a href="https://github.com/tkhquang/" target="_blank" rel="noopener noreferrer">Aleks's profile</a> on GitHub</p>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/quang-trinh-khac-66476517b/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
              </a>
              <p>View Aleks's <a href="https://www.linkedin.com/in/quang-trinh-khac-66476517b/" target="_blank" rel="noopener noreferrer">LinkedIn profile</a></p>
            </li>
          </ul>
          <nav className="bottom-nav">
            <dl>
              {bottomNavs.map(({ to, header, content }) => (
                <Fragment key={header}>
                  <dt>
                    <Link to={to} onClick={handleLinkClick} replace={replaceNeeded(to)}>
                      {header}
                    </Link>
                  </dt>
                  <dd>
                    {content}
                  </dd>
                </Fragment>
              ))}
            </dl>
          </nav>
        </div>
      </div>
      <small className="footer-copyright">Copyright © {year} <a href="https://github.com/tkhquang/" target="_blank" rel="noopener noreferrer">Aleks Quang Trịnh <FontAwesomeIcon icon={faGithub} /></a>.
      </small>
    </footer>
  );
}

export default withRouter(Footer);