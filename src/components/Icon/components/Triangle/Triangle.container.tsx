import React, { FC } from "react";

import { IconProps } from "components/Icon/Icon.types";

import "components/Icon/Icon.scss";

const Triangle: FC<IconProps> = ({ color, size }) => {
  const className = "icon";

  return (
    <svg
      className={`${className}_${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 0L17.6603 15H0.339746L9 0Z" fill={color} />
    </svg>
  );
};

export default Triangle;
