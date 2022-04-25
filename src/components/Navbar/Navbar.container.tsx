import React, { FC, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Colors } from "types/colors.types";
import { IconShapes } from "types/icons";
import { Icon } from "components/Icon";

import "./Navbar.scss";
import ThemeContext from "context/ThemeContext";

const Navbar: FC = () => {
  const className = "navbar";

  const { isThemeDark, toggleTheme, isSecretEnabled } =
    useContext(ThemeContext);

  return (
    <nav className={className}>
      {isSecretEnabled ? (
        <div className={`${className}_logo`} onClick={toggleTheme}>
          {isThemeDark ? (
            <Icon name={IconShapes.Moon} size="sm" color={Colors.White} />
          ) : (
            <Icon name={IconShapes.Circle} size="sm" color={Colors.Yellow} />
          )}
          <span>Tomas Sedurskas</span>
        </div>
      ) : (
        <div className={`${className}_logo -inactive`}>
          <Icon name={IconShapes.Circle} size="sm" color={Colors.Yellow} />
          <span>Tomas Sedurskas</span>
        </div>
      )}

      <ul className={`${className}_list`}>
        <li className={`${className}_list-item`}>
          <Link to="/Portfolio-2022">Home</Link>
        </li>
        <li className={`${className}_list-item`}>
          <Link to="/Portfolio-2022/work-experience">Work experience</Link>
        </li>
        <li className={`${className}_list-item`}>
          <Link to="/Portfolio-2022/education/0">Education</Link>
        </li>
        <li className={`${className}_list-item`}>
          <Link to="/Portfolio-2022/skill-set">Skill set</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
