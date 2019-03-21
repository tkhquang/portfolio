import React, { Component } from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import "./Header.scss";

class Header extends Component {
  constructor (props) {
    super (props);
    this.headerRef = React.createRef();
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
    const replaceNeeded = (linkTo) => this.props.location.pathname === linkTo;
    return (
      <header
        className="header"
        ref={this.headerRef}
      >
        <div className="logo">
          <Link
            to="/"
            onClick={this.handleLinkClick}
            replace={replaceNeeded("/")}
          >
            Aleks Quang Trịnh
          </Link>
        </div>
        <nav className="nav">
          <ul className="nav_list">
            <li className="nav_item">
              <NavLink
                exact to="/"
                activeClassName="selected"
                onClick={this.handleLinkClick}
                replace={replaceNeeded("/")}
              >
                ABOUT
              </NavLink>
            </li>
            <li className="nav_item">
              <NavLink
                to="/projects/"
                activeClassName="selected"
                onClick={this.handleLinkClick}
                replace={replaceNeeded("/projects/")}
              >
                PROJECTS
              </NavLink>
            </li>
            <li className="nav_item">
              <NavLink
                to="/contact/"
                activeClassName="selected"
                onClick={this.handleLinkClick}
                replace={replaceNeeded("/contact/")}
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
