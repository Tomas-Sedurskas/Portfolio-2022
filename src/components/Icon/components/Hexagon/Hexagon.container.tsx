import React, { FC } from "react";

import { IconProps } from "components/Icon/Icon.types";

import "components/Icon/Icon.scss";

const Hexagon: FC<IconProps> = ({ color, size }) => {
  const className = "icon";

  return (
    <svg
      className={`${className}_${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 0L11.8925 2.25799L15.7942 4.5L15.785 9L15.7942 13.5L11.8925 15.742L8 18L4.1075 15.742L0.205771 13.5L0.215 9L0.205771 4.5L4.1075 2.25799L8 0Z"
        fill={color}
      />
    </svg>
  );
};

export default Hexagon;
