import React, { FC, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Colors } from "types/colors.types";
import { IconShapes } from "types/icons";
import { Icon } from "components/Icon";

import "./NavbarMobile.scss";
import ThemeContext from "context/ThemeContext";

const NavbarMobile: FC = () => {
  const className = "navbar-mobile";

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

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

      <button
        className={`${className}_burger`}
        onClick={() => setIsNavbarOpen(!isNavbarOpen)}
      >
        <div className={`${className}_burger-position`}>
          <span
            className={
              isNavbarOpen
                ? `${className}_burger-top -active`
                : `${className}_burger-top`
            }
          ></span>
        </div>
        <div className={`${className}_burger-position`}>
          <span
            className={
              isNavbarOpen
                ? `${className}_burger-bot -active`
                : `${className}_burger-bot`
            }
          ></span>
        </div>
      </button>
      {isNavbarOpen && (
        <ul className={`${className}_list`}>
          <li className={`${className}_list-item`}>
            <Link
              onClick={() => {
                setIsNavbarOpen(false);
              }}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className={`${className}_list-item`}>
            <Link
              onClick={() => {
                setIsNavbarOpen(false);
              }}
              to="/work-experience"
            >
              Work experience
            </Link>
          </li>
          <li className={`${className}_list-item`}>
            <Link
              onClick={() => {
                setIsNavbarOpen(false);
              }}
              to="/education/0"
            >
              Education
            </Link>
          </li>
          <li className={`${className}_list-item`}>
            <Link
              onClick={() => {
                setIsNavbarOpen(false);
              }}
              to="/skill-set"
            >
              Skill set
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavbarMobile;
