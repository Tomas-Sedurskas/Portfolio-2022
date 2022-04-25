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
    experiences: [
      "Created maintainable, scalable, high performance UI with React, TypeScript and SASS.",
      "Contributed to the growing Kevin UI component library.",
      "Unit tested components and API calls.",
      "Used React Query, React Table and React Hook Form to speed up feature development.",
      "Worked with a feature-based Git flow.",
    ],
    url: "https://www.kevin.eu/",
    img: "/Portfolio-2022/src/assets/images/kevin-screen.png",
    shape: IconShapes.Hexagon,
    color: Colors.Red,
  },
  {
    title: "Addendum",
    subtitle: "IT Industry",
    description:
      "Addendum is an international provider of IT services for software development, IT outsourcing, and consulting.",
    technologies: ["SAPUI5", "JavaScript", "SASS", "NodeJS", "Git", "Jest"],
    experiences: [
      "Worked on coding new front-end views with SAPUI5 from design prototypes and connecting the UI with the back-end and API.",
    ],
    url: "https://www.addendumgroup.com/",
    img: "/Portfolio-2022/src/assets/images/addendum-screen.png",
    shape: IconShapes.Pentagon,
    color: Colors.Green,
  },
  {
    title: "Smart-trial",
    subtitle: "Medical Industry",
    description:
      "Smart-trial is developing the only web application for Electronic Data Capture (EDC) platform designed for MedTech.",
    technologies: ["React", "Angular", "CSS", "NodeJS", "AdobeXD", "WebFlow"],
    experiences: [
      "Prototyped and worked on a full UX/UI redesign, Information Architecture rework, coding and maintenance of the new website.",
      "Created new feature and web page UX/UI designs for the SMART-TRIAL web application and the website in collaboration with other departments in the company.",
      "Transferred and updated parts of the web application from AngularJS to a modern version of React.",
      "Worked with outsourced third-party UI design projects from other clients.",
    ],
    url: "https://www.smart-trial.com/",
    img: "/Portfolio-2022/src/assets/images/smart-trial-screen.png",
    shape: IconShapes.Square,
    color: Colors.Yellow,
  },
  {
    title: "Seluxit",
    subtitle: "Iot Industry",
    description:
      "Seluxit is working on and IoT based app store and connecting things to the internet to optimize systems and save resources.",
    technologies: ["React", "CSS", "NodeJS", "AdobeXD"],
    experiences: [
      "Worked on creating a demo web application with their Internet of Things API tool and React.",
      "The web application allowed to trigger custom lighting presets based on the user’s Google Calendar events in addition to having full custom UI for remote control for any smart light bulb.",
    ],
    url: "https://www.seluxit.com/",
    img: "/Portfolio-2022/src/assets/images/seluxit-screen.png",
    shape: IconShapes.Triangle,
    color: Colors.Blue,
  },
];
