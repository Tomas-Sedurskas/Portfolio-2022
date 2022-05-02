import ThemeContext from "context/ThemeContext";
import React, { FC, useContext, useEffect, useState } from "react";
import { circle, donut } from "./HeroSvg.constants";

import "./HeroSvg.scss";

const Button: FC = () => {
  const className = "hero-svg";
  const { toggleSecret } = useContext(ThemeContext);

  const [isRedClicked, setIsRedClicked] = useState(false);
  const [isBlueClicked, setIsBlueClicked] = useState(false);
  const [isGreenClicked, setIsGreenClicked] = useState(false);

  const isSecretUnlocked = isRedClicked && isBlueClicked && isGreenClicked;

  useEffect(() => {
    if (isSecretUnlocked) {
      localStorage.setItem("portfolio-secret_dark_mode", "true");
      toggleSecret();
    }
  }, [isSecretUnlocked]);

  return (
    <div className={className}>
      <svg
        viewBox="0 0 480 480"
        preserveAspectRatio="xMinYMin meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={
            isRedClicked ? `${className}_path-activated` : `${className}_path`
          }
          fillRule="evenodd"
          clipRule="evenodd"
          d="M472 0H240V119C306.274 119 360 172.726 360 239C360 239.334 359.999 239.667 359.996 240H480V8C480 3.58172 476.418 0 472 0Z"
          fill={isRedClicked ? "#E5A23F" : "#D44530"}
          onClick={() => setIsRedClicked(true)}
        />
        <path
          className={`${className}_path-activated`}
          fillRule="evenodd"
          clipRule="evenodd"
          d={isSecretUnlocked ? circle : donut}
          fill="#E5A23F"
        />
        <path
          className={
            isGreenClicked ? `${className}_path-activated` : `${className}_path`
          }
          fillRule="evenodd"
          clipRule="evenodd"
          d="M240.004 359C240.003 359 240.001 359 240 359C206.873 359 176.881 345.577 155.167 323.873C142.653 336.296 130.327 348.562 119.446 359.442C77.5464 401.342 15.0898 464.69 2.33008 477.639C3.7793 479.097 5.78613 480 8.00439 480H240.004V359Z"
          fill={isGreenClicked ? "#E5A23F" : "#4AB76E"}
          onClick={() => setIsGreenClicked(true)}
        />
        <path
          className={
            isBlueClicked ? `${className}_path-activated` : `${className}_path`
          }
          fillRule="evenodd"
          clipRule="evenodd"
          d="M120.004 240H0V472C0 474.218 0.902832 476.225 2.36084 477.674C15.3096 464.914 78.6582 402.458 120.558 360.558C131.44 349.676 143.71 337.346 156.135 324.829C134.061 303.257 120.275 273.239 120.004 240Z"
          fill={isBlueClicked ? "#E5A23F" : "#3680D1"}
          onClick={() => setIsBlueClicked(true)}
        />
      </svg>
      {isSecretUnlocked && (
        <p className={`${className}_secret`}>
          <h3>🎉Congratulations!🎉</h3>
          You unlocked dark mode. <br></br>
          Click the orange circle <br></br>
          at the top of the page
        </p>
      )}
    </div>
  );
};
export default Button;
