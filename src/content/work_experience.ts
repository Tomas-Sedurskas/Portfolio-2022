import { Colors } from "types/colors.types";
import { ContentSection } from "types/content.types";
import { IconShapes } from "types/icons";

export const WORK_EXPERIENCE_CONTENT: ContentSection[] = [
  {
    title: "Kevin",
    subtitle: "Financial Industry",
    description:
      "Kevin is a payments fintech that provides a secure and developer-friendly payments infrastructure accessible via an API.",
    technologies: [
      "React",
      "TypeScript",
      "SASS",
      "Redux",
      "Jest",
      "MJML",
      "NodeJS",
      "Git",
    ],
    img: "src/assets/images/kevin-screen.png",
    shape: IconShapes.Hexagon,
    color: Colors.Red,
  },
  {
    title: "Addendum",
    subtitle: "IT Industry",
    description:
      "Addendum is an international provider of IT services for software development, IT outsourcing, and consulting.",
    technologies: ["SAPUI5", "JavaScript", "SASS", "NodeJS", "Git", "Jest"],
    img: "src/assets/images/addendum-screen.png",
    shape: IconShapes.Pentagon,
    color: Colors.Green,
  },
  {
    title: "Smart-trial",
    subtitle: "Medical Industry",
    description:
      "Smart-trial is developing the only web application for Electronic Data Capture (EDC) platform designed for MedTech.",
    technologies: ["React", "Angular", "CSS", "NodeJS", "AdobeXD", "WebFlow"],
    img: "src/assets/images/smart-trial-screen.png",
    shape: IconShapes.Square,
    color: Colors.Yellow,
  },
  {
    title: "Seluxit",
    subtitle: "Iot Industry",
    description:
      "Seluxit is working on and IoT based app store and connecting things to the internet to optimize systems and save resources.",
    technologies: ["React", "CSS", "NodeJS", "AdobeXD"],
    img: "src/assets/images/seluxit-screen.png",
    shape: IconShapes.Triangle,
    color: Colors.Blue,
  },
];
