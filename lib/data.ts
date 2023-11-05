import React from "react";
import { FaCloud, FaReact } from "react-icons/fa";
import adminDashboardReactImg from '@public/admindashboardreact.png';
import adminDashboardVanillaImg from '@public/admindashboardvanilla.png';
import carHubImg from '@public/carhub.png';
import foodOrderImg from '@public/foodorder.png';
import promptopiaImg from '@public/promptopia.png';

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
//   {
//     title: "Web Developer",
//     location: "Iasi, Romania",
//     description:
//       `After the first 2 months of activity I've developed from scratch a web 
//       application for task management. Next, I've started to create and customize 
//       themes in Wordpress.`,
//     icon: React.createElement(LuGraduationCap),
//     date: "2019-2021",
//   },
  {
    title: "Full-Stack Developer",
    location: "Iasi, Romania",
    description:
      `I worked as a full-stack developer for 1 year. I also upskilled to the full stack, mainly learning PHP, Magento, Laravel but also jQuery and VueJS.`,
    icon: React.createElement(FaCloud),
    date: "Mar 2019 - Apr 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Iasi, Romania",
    description:
      `I've created from scratch an app for Oxford Archaeology. The stack I used included PHP and VueJS`,
    icon: React.createElement(FaReact),
    date: "Apr 2022 - Aug 2022",
  },
  {
    title: "Salesforce Developer",
    location: "Iasi, Romania",
    description:
      `Develop high level solutions using Apex classes, Triggers, Visualforce pages, Lightning Components and Lightning Web Components based on the best practices`,
    icon: React.createElement(FaReact),
    date: "Aug 2022 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "CarHub",
    description:
      `This app allows the user to search for diverse cars and filter them by Fuel 
      and Year. The user can view extra details for each car, such as images of the 
      car, the Fuel Urban Consumption, the class of the car, the number of cylinders,
       type of transmission. and many others. `,
    tags: ["React", "TypeScript", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: carHubImg,
  },
  {
    title: "Promptopia",
    description:
      `This app is an open source AI Prompting tool that helps users to discover, 
      create and share creative prompts. The user can search for tags, usernames and 
      prompted content. Basically this project represents a Full Stack Next.JS13 
      CRUD App`,
    tags: ["React", "Next.js", "MongoDB", "Tailwind" ],
    imageUrl: promptopiaImg,
  },
  {
    title: "Food Order",
    description:
      `This app allows the user to add the available foods to the cart and submit 
      the cart. The user can add different quantities of the items and the cart will
       be live updated (with a smooth animation as well for each cart update). 
       The cart shows the total amount of total items and the total cost. After 
       the user clicks on "Order" action, a form with user's address needs to be 
       filled and submited in order for the order to be completed. `,
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: foodOrderImg,
  },
  {
    title: "Admin Dashboard",
    description:
      `This dashboard is created from scratch with React, Tailwind, MaterialUI, 
      FullClanedar, Formik, React Pro Sidebar and Nivo charts`,
    tags: ["React", "Tailwind"],
    imageUrl: adminDashboardReactImg,
  },
  {
    title: "Vanilla Admin Dashboard",
    description:
      `Created from scratch a responsive Admin Dashboard with HTML, vanilla CSS 
      and vanilla JS.`,
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: adminDashboardVanillaImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "jQuery",
  "React",
  "VueJS",
  "Angular",
  "Next.js",
//   "Node.js",
  "Git",
  "Tailwind",
  "PHP",
  "Magento 1 & 2",
  "MongoDB",
  "Mongoose",
  "Redux",
//   "Express",
  "PostgreSQL",
] as const;