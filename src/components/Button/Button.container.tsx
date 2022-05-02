import React, { FC } from "react";
import { Link } from "react-router-dom";
import { ButtonProps } from "./Button.types";
import Arrow from "/assets/icons/Arrow.svg";

import "./Button.scss";
const Button: FC<ButtonProps> = ({ label, url, reverse, linkType }) => {
  const className = "button";

  return (
    <>
      {linkType === "internal" && (
        <Link to={url}>
          <div className={className}>
            {reverse && <img className={`${className}_reverse`} src={Arrow} />}
            {label}
            {!reverse && <img src={Arrow} />}
          </div>
        </Link>
      )}

      {linkType === "external" && (
        <a target="_blank" className={className} href={url}>
          {reverse && <img className={`${className}_reverse`} src={Arrow} />}
          {label}
          {!reverse && <img src={Arrow} />}
        </a>
      )}
    </>
  );
};
export default Button;
