import React, { FC } from "react";

import { IconProps } from "components/Icon/Icon.types";

import "components/Icon/Icon.scss";

const Circle: FC<IconProps> = ({ color, size }) => {
  const className = "icon";

  return (
    <svg
      className={`${className}_${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9Z"
        fill={color}
      />
    </svg>
  );
};

export default Circle;
