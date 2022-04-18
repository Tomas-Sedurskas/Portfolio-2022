import React, { FC } from "react";
import { Link } from "react-router-dom";
import { ButtonProps } from "./Button.types";
import Arrow from "assets/Arrow.svg";

import "./Button.scss";
const Button: FC<ButtonProps> = ({ label, url }) => {
  const className = "button";

  return (
    <Link to={url}>
      <button className={className}>
        {label}
        <img src={Arrow} />
      </button>
    </Link>
  );
};
export default Button;
