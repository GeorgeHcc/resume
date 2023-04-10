import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  cqupt,
  adetech,
  carrent,
  jobit,
  tripguide,
  threejs
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Vue Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: "https://cn.vuejs.org/logo.svg",
  },
  {
    name: "Next.js",
    icon: "https://www.nextjs.cn/static/favicon/favicon-32x32.png",
  },
  {
    name: "Nuxt.js",
    icon: "https://nuxt.com/icon.png",
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },

];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Adetech",
    company_url: "http://www.adtech.com.cn/",
    icon: adetech,
    iconBg: "#383E56",
    date: "March 2022 - November 2022",
    points: [
      "Developing and maintaining web applications using Nuxt.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Nuxt.js builds large server-side rendering projects, as well as SEO optimization work.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Ability to perform project performance optimization and code normalization."
    ],
  },
  {
    title: "Small program Developer",
    company_name: "Chongqing University of Posts and Telecommunications",
    company_url: "https://www.cqupt.edu.cn/",
    icon: cqupt,
    iconBg: "#E6DEDD",
    date: "September 2022 - March 2023",
    points: [
      'Bottom-loading, wrapper createGetList higher - order function, infinite list loading.',
      'Combined with the stack data structure to encapsulate the Pipeline class to realize the undo and recovery function of the answer module.',
      'Encapsulation optimistically updates related utils to optimize the network load.',
      'Implement career reports computational generation for three universities.'
    ],
  },
  {
    title: "Vue Developer",
    company_name: "Chongqing University of Posts and Telecommunications",
    company_url: "https://www.cqupt.edu.cn/",
    icon: cqupt,
    iconBg: "#E6DEDD",
    date: "September 2022 - March 2023",
    points: [
      'Responsible for the entire life cycle of the project and its infrastructure.',
      'Encapsulate BasetEChart components, build a visualization platform, and dynamically route reactive control charts.',
      'Fine-grained peer-to-peer control of permissions, unified network request Api specification, and encapsulate hooks based on pinia to realize the basic data flow of the project.',
      'Able to find issues in open source component libraries during project development and raise issues Pr.',
      'Combined with the Vite plugin ecosystem, optimize the performance of the project, build optimization, and development experience optimization.'
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but GeorgeH proved me wrong.",
    name: "FeiFei",
    designation: "UI/UX Designer",
    company: "Adetech",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a front-end developer who truly cares about the customer experience as much as GeorgeH does.",
    name: "Teacher Cai",
    designation: "Leader",
    company: "Chongqing University of Posts and Telecommunications",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After GeorgeH optimized our website, our website performance improved by 20 percent!",
    name: "Hong Classmate",
    designation: "colleague",
    company: "Chongqing University of Posts and Telecommunications",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "CDesign",
    description: "This is the react component design and customHooks library.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/CCherry07/Cdesign",
  },
  {
    name: "vite-plugin-auto-route",
    description: "The Vite plugin ecosystem is used to realize the dynamic generation of routes and their folder structure.",
    tags: [
      {
        name: "vite",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/CCherry07/vite-plugin-auto-route",
  },
  {
    name: "jira",
    description: "Implement enterprise-level project management system based on react and typescript.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "antd",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/CCherry07/react-ts-jira",
  },
];

export { services, technologies, experiences, testimonials, projects };
