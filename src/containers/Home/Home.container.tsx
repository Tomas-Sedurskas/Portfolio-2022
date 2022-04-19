import React, { FC } from "react";

import "./Home.scss";
import colorShape from "assets/images/colorShape.svg";
import { Button } from "components/Button";

const Home: FC = () => {
  const className = "home";

  return (
    <div className={className}>
      <div className={`${className}_hero`}>
        <h1 className={`${className}_hero-title`}>
          Hey 👋<br></br>
          I’m Tomas, a<br></br>
          <span>React Frontend developer</span>
        </h1>

        <Button label={"View my work"} url={"/work-experience"} />
      </div>

      <img className={`${className}_hero-image`} src={colorShape} />
    </div>
  );
};

export default Home;
