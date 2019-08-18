import React, { Component } from "react";
import { NavLink, Link, withRouter } from "react-router-dom";

import "./Header.scss";

class Header extends Component {
  constructor (props) {
    super (props);
    this.headerRef = React.createRef();
    this.navLinks = [
      {
        exact: true,
        to: "/portfolio/about",
        text: "ABOUT"
      },
      {
        exact: true,
        to: "/portfolio/projects",
        text: "PROJECTS"
      },
      {
        exact: true,
        to: "/portfolio/contact",
        text: "CONTACT"
      },
    ];
  }
  handleLinkClick = () => {
    if (this.props.history.location.pathname === this.props.location.pathname) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
  handleScroll = () => {
    const isScrolled = Boolean(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50);
    const headerStyle = this.headerRef.current.style;
    const headerBG = this.headerRef.current.style.backgroundColor;
    if (isScrolled && headerBG !== "rgba(0, 0, 0, 0.6)") {
      headerStyle.backgroundColor = "rgba(0, 0, 0, 0.6)";
    }
    if (!isScrolled && headerBG !== "rgba(0, 0, 0, 0.3)") {
      headerStyle.backgroundColor = "rgba(0, 0, 0, 0.3)";
    }
  }
  componentDidMount () {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount () {
    window.removeEventListener("scroll", this.handleScroll);
  }
  render () {
    // Clicking the same link as current location will replace the current entry in the history stack instead of adding a new one.
    const isCurrentPath = (linkTo) => this.props.location.pathname === linkTo;
    return (
      <header
        className="header"
        ref={this.headerRef}
      >
        <div className="logo">
          <Link
            to="/portfolio/about"
            onClick={this.handleLinkClick}
            replace={isCurrentPath("/portfolio/about")}
          >
            Aleks Quang Trịnh
          </Link>
        </div>
        <nav className="nav">
          <ul className="nav_list">
            {this.navLinks.map((navLink) => (
              <li className="nav_item" key={navLink.text}>
                <NavLink
                  exact={navLink.exact}
                  to={navLink.to}
                  activeClassName="selected"
                  onClick={this.handleLinkClick}
                  replace={isCurrentPath(navLink.to)}
                >
                  {navLink.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
