import React, { FC } from "react";
import { IconShapes } from "types/icons";
import {
  Circle,
  Hexagon,
  Moon,
  Pentagon,
  Square,
  Triangle,
} from "./components";

import { BaseIconProps } from "./Icon.types";

const Icon: FC<BaseIconProps> = ({ name, size, color }) => {
  return (
    <>
      {name === IconShapes.Hexagon && <Hexagon size={size} color={color} />}
      {name === IconShapes.Pentagon && <Pentagon size={size} color={color} />}
      {name === IconShapes.Square && <Square size={size} color={color} />}
      {name === IconShapes.Triangle && <Triangle size={size} color={color} />}
      {name === IconShapes.Circle && <Circle size={size} color={color} />}
      {name === IconShapes.Moon && <Moon size={size} color={color} />}
    </>
  );
};

export default Icon;
