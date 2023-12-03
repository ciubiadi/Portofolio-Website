import React from "react";
import adminDashboardReactImg from '@/public/admindashboardreact.png';
import adminDashboardVanillaImg from '@/public/admindashboardvanilla.png';
import goodFoodRecipesImg from '@/public/goodfoodrecipes.png';
import carHubImg from '@/public/carhub.png';
import foodOrderImg from '@/public/foodorder.png';
import promptopiaImg from '@/public/promptopia.png';
import cloudlabIconImg from '@/public/cloudlab-small.jpeg'
import newrocoIconImg from '@/public/newroco_small.webp';
import deloitteIconImg from '@/public/Deloitte.icon.ico'
import Image from "next/image";

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
    company: 'Cloudlab AG',
    description:
      `I worked as a full-stack developer for 1+ year. I was mainly developing functionalities and solving bugs for some e-commerce websites. I used  PHP, Magento, Laravel and jQuery, VueJS but also KnockoutJS, Linux Servers, PuTy terminal and WinSCP.`,
    icon: <Image src={cloudlabIconImg} className='experience-logo-icons' alt="Cliudlab AG" width={50} height={50} />,
    date: "Mar 2021 - Apr 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Iasi, Romania",
    company: 'Newroco',
    description:
      `I've created from scratch an app for Oxford Archaeology. The stack I used included PHP and VueJS.`,
    icon: <Image src={newrocoIconImg} className='experience-logo-icons' alt="Newroco" width={50} height={50} />,
    date: "Apr 2022 - Aug 2022",
  },
  {
    title: "Salesforce Developer",
    location: "Iasi, Romania",
    company: 'Deloitte Digital',
    description:
      `Develop high level solutions using Apex(Programming language 95% based on Java), Triggers, Visualforce pages, Lightning Components and Lightning Web Components based on the best practices. Also I worked for a short period for an internal Ecommerce project in React and TypeScript.`,
    icon: <Image src={deloitteIconImg} className='experience-logo-icons' alt="Newroco" width={50} height={50} style={{marginLeft: '4px'}}/>,
    date: "Aug 2022 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Good Food Recipes",
    description:
      `This VueJS cooking app, enhances the culinary experience with dynamic search, paginated view,
       and coach registration. `,
    tags: ["Vue 3", "Vuex 4", "Vue Router 4", "TypeScript", "Tailwind", "Firebase"],
    imageUrl: goodFoodRecipesImg,
    repo: 'https://github.com/ciubiadi/Good-Food-Recipes',
    liveUrl: 'https://vuemealsandcooks.web.app/',
  },
  {
    title: "CarHub",
    description:
      `This app allows the user to search for diverse cars and filter them by Fuel 
      and Year. Also, the user can view extra details for each car.`,
    tags: ["React", "TypeScript", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: carHubImg,
    repo: 'https://github.com/ciubiadi/CarsHub/tree/client-side-rendered',
    liveUrl: 'https://carshub-five.vercel.app/',
  },
  {
    title: "Promptopia",
    description:
      `This app is an open source AI Prompting tool that helps users to discover, 
      create and share creative prompts.`,
    tags: ["React", "Next.js", "MongoDB", "Tailwind" ],
    imageUrl: promptopiaImg,
    repo: 'https://github.com/ciubiadi/Promptopia',
    liveUrl: 'https://promptopia-ruby-zeta.vercel.app/',
  },
  {
    title: "Food Order",
    description:
      `This app allows the user to order the available foods, manage and submit 
      the cart.`,
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: foodOrderImg,
    repo: 'https://github.com/ciubiadi/My-Learning-Journey/tree/React/Udemy-Complete-Guide/The-Food-Order-App-Project',
    liveUrl: 'https://the-food-order-react-app.netlify.app/',
  },
  {
    title: "Admin Dashboard",
    description:
      `This dashboard is created from scratch with React, Tailwind, MaterialUI, 
      FullClanedar, Formik, React Pro Sidebar and Nivo charts.`,
    tags: ["React", "Tailwind"],
    imageUrl: adminDashboardReactImg,
    repo: 'https://github.com/ciubiadi/React-Admin-Dashboard',
    liveUrl: '',
  },
  {
    title: "Vanilla Admin Dashboard",
    description:
      `Created from scratch a responsive Admin Dashboard with HTML, vanilla CSS 
      and vanilla JS.`,
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: adminDashboardVanillaImg,
    repo: 'https://github.com/ciubiadi/Vanilla-Admin-Dashboard',
    liveUrl: '',
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
  "Salesforce",
  "Apex",
  'LWC'
] as const;
