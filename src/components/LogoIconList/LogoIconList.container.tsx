import React, { FC } from "react";

import { LogoIconListProps } from "./LogoIconList.types";

import "./LogoIconList.scss";

const LogoIconList: FC<LogoIconListProps> = ({ icons, enableToolips }) => {
  const className = "logo-icon-list";

  return (
    <div className={className}>
      {icons.map((icon) => {
        return (
          <div className={`${className}_icon`}>
            {enableToolips && <span>{icon}</span>}
            <img
              src={`/Portfolio-2022/src/assets/logos/${icon}.png`}
              alt={`${icon} logo`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default LogoIconList;
