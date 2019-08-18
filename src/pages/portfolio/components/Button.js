import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

import "./Button.scss";

const Button = (props) => (
  <Link
    className="btn-nav"
    to={props.href}
    title={props.title}
  >
    <span>{props.text}</span>
    <FontAwesomeIcon icon={faChevronCircleRight} />
  </Link>
);

export default Button;
