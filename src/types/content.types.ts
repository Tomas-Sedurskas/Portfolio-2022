import { Colors } from "./colors.types";
import { IconShapes } from "./icons";

export interface ContentSection {
  title: string;
  subtitle: string;
  description: string;
  img: string;
  url: string;
  shape: IconShapes;
  color: Colors;
}
