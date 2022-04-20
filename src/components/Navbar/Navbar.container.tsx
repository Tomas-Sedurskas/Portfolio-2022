import React, { FC } from "react";
import { Link } from "react-router-dom";

import { Colors } from "types/colors.types";
import { IconShapes } from "types/icons";
import { Icon } from "components/Icon";

import "./Navbar.scss";

const Navbar: FC = () => {
  const className = "navbar";

  return (
    <nav className={className}>
      <div className={`${className}_logo`}>
        <Icon name={IconShapes.Circle} size="sm" color={Colors.Yellow} />

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
          <Link to="/education/0">Education</Link>
        </li>
        <li className={`${className}_list-item`}>
          <Link to="/skill-set">Skill set</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
