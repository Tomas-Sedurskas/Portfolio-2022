import React, { FC } from "react";
import { Link } from "react-router-dom";

import logo from "assets/Circle.svg";

import "./Navbar.scss";

const Navbar: FC = () => {
  const className = "navbar";

  return (
    <nav className={className}>
      <div className={`${className}_logo`}>
        <img src={logo} />
        <span>Tomas Sedurskas</span>
      </div>
      <ul className={`${className}_list`}>
        <li className={`${className}_list-item`}>
          <Link to="/">Home</Link>
        </li>
        <li className={`${className}_list-item`}>
          <Link to="/work-experience">Work experience</Link>
        </li>
        <li className={`${className}_list-item`}>
          <Link to="/education">Education</Link>
        </li>
        <li className={`${className}_list-item`}>
          <Link to="/skill-set">Skill set</Link>
        </li>
        <li className={`${className}_list-item`}>
          <Link to="/about-me">About me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
