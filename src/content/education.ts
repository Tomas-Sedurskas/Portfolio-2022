import { Colors } from "types/colors.types";
import { ContentPage } from "types/content.types";
import { IconShapes } from "types/icons";

export const EDUCATION_PROJECTS_CONTENT: ContentPage[] = [
  {
    id: 0,
    title: "Dashboard",
    subtitle: "IoT weather dashboard",
    description:
      "For my graduation exam I continued working with IoT related web applications. The Dashboard allowed users to get data about their indoor and outdoor environments by connecting IoT devices to the App. The aim of the project was to create something that is aesthetically pleasing while being functional and easy to use by visualizing the data in charts and showing live data to the user.",
    shape: IconShapes.Pentagon,
    color: Colors.Green,
    subsections: [
      {
        title: "Development of the Web App",
        description:
          "Throughout the development of this project I had a lot of freedom because the task given to me was pretty broad. The task was to make a data visualization web app with the use of an IoT API that the company had developed. The web app was done with the use of React, Bootstrap, Victory Charts, Wapp-Api and custom made stylings and layouts.",
        img: "/src/assets/images/Dashy-Main.jpg",
      },
    ],
  },
  {
    id: 1,
    title: "Autolite",
    subtitle: "IoT light automation / controller",
    description:
      "Autolite was a Solo project that was done throughout my internship at Seluxit A/S. This was my first attempt at making a web application for IoT devices. The app allowed users to control Philips Hue lights. The main focus was on allowing users to attach their custom made lighting presets to their Google calendar events.",
    shape: IconShapes.Pentagon,
    color: Colors.Green,
    subsections: [
      {
        title: "Initial Development",
        description:
          "The idea for the Autolite began as a mobile application. At first, it was meant to be a simple smart light controller with some customization options but then it evolved into a more complex project that allowed to create presets and had Google Calendar event support. The application made use of React, Bootstrap, React Color, Wapp-Api and custom made stylings and layouts.",
        img: "/src/assets/images/Autolite-Mobile.jpg",
      },
      {
        title: "Desktop / Tablet Development",
        description:
          "As the project went on its design and layout transitioned and adapted for desktop and tablet usage as well. The touch screen friendly design was kept on both the mobile and desktop versions of the application partially as an artifact of mobile design and partially due to more and more laptops introducing touch screens into the market.",
        img: "/src/assets/images/Autolite-Desktop.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Travel",
    subtitle: "Social media mobile travel app",
    description:
      "As a team of 3, we developed a social media mobile web app for travelers. The goal of the application was to allow users to create and share their trip ideas and experiences. Locations, routes, photos, tips, to-do lists and more were accessible in the web app. The goal of this project was to provide all of the necessary tools for the users to share their experiences while other users could easily find for what they are looking by searching or filtering through the trips.",
    shape: IconShapes.Pentagon,
    color: Colors.Green,
    subsections: [
      {
        title: "Onboarding Experience",
        description:
          "Heavy focus was put on the onboarding experience for this project since it relied heavily on having at least a moderate amount of users. The onboarding included an introductory card tutorial and made use of empty state onboarding. Meaning that a new user should get all the pointers they could need to understand the purpose of the app and how to use it.",
        img: "/src/assets/images/Travel-Intro.jpg",
      },
      {
        title: "Development of the Mobile App",
        description:
          "The scope of this project required our team of 3 to manage our resources well to create this application. The whole team contributed to the design of the final product, but the coding part was split up. The back-end coding and some parts of the React code were written by me and my teammates took charge of the CSS and the rest of the React coding.",
        img: "/src/assets/images/Travel-Main.jpg",
      },
      {
        title: "Trying Firebase",
        description:
          "For this project I wanted to try out something new so I stumbled upon Firebase while figuring out how the back-end should be done. The database, account registration and authentication were done with the use of Firebase.",
        img: "/src/assets/images/Travel-Onboarding.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Apel",
    subtitle: "Website redesign",
    description:
      "This project required us to form teams of 4 students. We collaborated to redesign, develop a brand Identity and code a new website for the client. The final product loaded content dynamically from WordPress as a Headless CMS as part of the University requirements for this project.",
    shape: IconShapes.Pentagon,
    color: Colors.Green,
    subsections: [
      {
        title: "Early Website",
        description:
          "The Apel's website is not my first website but it was one of the earlier websites that I took part in creating. Most of the focus was put on the UX/UI and developing a new identity for the client.",
        img: "/src/assets/images/Apel-Desktop.jpg",
      },
      {
        title: "Responsive Design and Typography",
        description:
          "The website was made fully responsive with some modifications to the layout. Typography played a big role in this project as well. We tried to strike a balance of something that could be easy to read, look aesthetically pleasing and look great both on a smartphone and on desktop.",
        img: "/src/assets/images/Apel-Mobile.jpg",
      },
    ],
  },
];

export const calcNextId = (id: number) => {
  if (id === EDUCATION_PROJECTS_CONTENT.length - 1) return 0;
  return id + 1;
};

export const calcPreviousId = (id: number) => {
  if (id !== 0) return id - 1;
  return EDUCATION_PROJECTS_CONTENT.length - 1;
};
