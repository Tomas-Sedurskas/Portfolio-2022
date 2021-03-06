import React, { FC } from "react";

import { IconProps } from "components/Icon/Icon.types";

import "components/Icon/Icon.scss";

const Pentagon: FC<IconProps> = ({ color, size }) => {
  const className = "icon";

  return (
    <svg
      className={`${className}_${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 0L13.2585 3.13867L17.5595 6.21885L15.8904 11.2388L14.2901 16.2812L9 16.245L3.70993 16.2812L2.1096 11.2388L0.440492 6.21885L4.7415 3.13867L9 0Z"
        fill={color}
      />
    </svg>
  );
};

export default Pentagon;
