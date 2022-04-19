import React, { FC } from "react";

import { IconProps } from "components/Icon/Icon.types";

import "components/Icon/Icon.scss";

const Moon: FC<IconProps> = ({ color, size }) => {
  const className = "icon";

  return (
    <svg
      className={`${className}_${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.4932 13.9868C16.3301 13.9956 16.166 14 16 14C11.0293 14 7 9.97046 7 5C7 3.15552 7.55469 1.44067 8.50684 0.0131836C3.76562 0.269287 0 4.19507 0 9C0 13.9705 4.0293 18 9 18C12.126 18 14.8799 16.4062 16.4932 13.9868Z"
        fill={color}
      />
    </svg>
  );
};

export default Moon;
