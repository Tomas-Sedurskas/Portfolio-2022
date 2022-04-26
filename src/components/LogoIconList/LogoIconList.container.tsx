import React, { FC, useId } from "react";

import { LogoIconListProps } from "./LogoIconList.types";

import "./LogoIconList.scss";

const LogoIconList: FC<LogoIconListProps> = ({ icons, enableToolips }) => {
  const className = "logo-icon-list";
  const listId = useId();

  return (
    <div className={className}>
      {icons.map((icon) => {
        return (
          <div key={`${icon}-${listId}`} className={`${className}_icon`}>
            {enableToolips && <span>{icon}</span>}
            <img
              src={`/Portfolio-2022/assets/logos/${icon}.png`}
              alt={`${icon} logo`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default LogoIconList;
