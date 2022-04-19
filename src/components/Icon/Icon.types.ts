import { IconShapes, IconSizes } from "types/icons";
import { Colors } from "types/colors.types";

export interface BaseIconProps extends IconProps {
  name: IconShapes;
}

export interface IconProps {
  size: IconSizes;
  color: Colors;
}
