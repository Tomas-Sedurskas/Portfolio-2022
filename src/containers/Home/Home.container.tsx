import React, { FC } from "react";

import "./Home.scss";
import colorShape from "assets/images/colorShape.svg";
import { Button } from "components/Button";
import { HeroSvg } from "components/HeroSvg";

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

        <Button
          linkType="internal"
          label={"View my work"}
          url={"/work-experience"}
        />
      </div>

      <HeroSvg />
    </div>
  );
};

export default Home;
