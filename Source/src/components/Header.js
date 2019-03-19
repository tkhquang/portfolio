import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import "./Header.scss";

const Header = (props) => {
  const handleLinkClick = () => {
    if (props.history.location.pathname === props.location.pathname) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };
  const replaceNeeded = (linkTo) => props.location.pathname === linkTo;
  return (
    <header
      className="header"
      style={props.scrolled
              ? {backgroundColor: "rgba(0, 0, 0, 0.6)"}
              : {backgroundColor: "rgba(0, 0, 0, 0.3)"}
            }
    >
      <div className="logo">
        <Link
          to="/"
          onClick={handleLinkClick}
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
              onClick={handleLinkClick}
              replace={replaceNeeded("/")}
            >
              ABOUT
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink
              to="/projects/"
              activeClassName="selected"
              onClick={handleLinkClick}
              replace={replaceNeeded("/projects/")}
            >
              PROJECTS
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink
              to="/contact/"
              activeClassName="selected"
              onClick={handleLinkClick}
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

export default withRouter(Header);
