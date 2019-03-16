import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = (props) => (
  <header
    className="header"
    style={props.scrolled
            ? {backgroundColor: "rgba(0, 0, 0, 0.6)"}
            : {backgroundColor: "rgba(0, 0, 0, 0.3)"}
          }
  >
    <div className="logo">
      <a href="/">Aleks Quang Trịnh</a>
    </div>
    <nav className="nav">
      <ul className="nav_list">
        <li className="nav_item"><Link to="/#about">ABOUT</Link></li>
        <li className="nav_item"><Link to="/projects/">PROJECTS</Link></li>
        <li className="nav_item"><Link to="/contact/">CONTACT</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
