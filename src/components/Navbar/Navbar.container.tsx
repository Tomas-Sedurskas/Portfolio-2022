import React, { FC, useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

import { Colors } from "types/colors.types";
import { IconShapes } from "types/icons";
import { Icon } from "components/Icon";
import ThemeContext from "context/ThemeContext";
import { paths } from "routing/paths";

import "./Navbar.scss";

const Navbar: FC = () => {
  const className = "navbar";
  const { pathname } = useLocation();

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
        {paths.map(({ path, name }) => {
          return (
            <li
              className={classNames(`${className}_list-item`, {
                "-active": path === pathname,
              })}
            >
              <Link to={path}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
