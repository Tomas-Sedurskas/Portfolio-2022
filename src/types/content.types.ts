import { Colors } from "./colors.types";
import { IconShapes } from "./icons";

export interface ContentSection {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  experiences: string[];
  url: string;
  img: string;
  shape: IconShapes;
  color: Colors;
}

export interface ContentPage {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  shape: IconShapes;
  color: Colors;
  subsections: Subsection[];
}

export interface Subsection {
  title: string;
  description: string;
  img: string;
}
