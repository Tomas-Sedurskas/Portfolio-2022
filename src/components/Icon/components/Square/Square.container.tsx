import React, { FC } from "react";

import { IconProps } from "components/Icon/Icon.types";

import "components/Icon/Icon.scss";

const Square: FC<IconProps> = ({ color, size }) => {
  const className = "icon";

  return (
    <svg
      className={`${className}_${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0H18V18H0V0Z" fill={color} />
    </svg>
  );
};

export default Square;
