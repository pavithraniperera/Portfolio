import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJava,
  FaPython,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import { BiLogoJavascript } from "react-icons/bi";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiSpringboot,
  SiIntellijidea,
  SiFigma,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";

import { VscVscode, VscCommentUnresolved, VscTerminal } from "react-icons/vsc";
import { FaGitAlt, FaTwitter } from "react-icons/fa6";
import { MdGroups3 } from "react-icons/md";
import No_Image from "../assets/images/No_Image_Available.jpg";
import Project_01 from "../assets/images/project-01.png";
import Project_02 from "../assets/images/project-02.png";
import Project_03 from "../assets/images/project-03.png";
import Project_04 from "../assets/images/project-04.png";
import Project_05 from "../assets/images/project-05.png";

export const MENU_LINKS = [
  { id: "01", label: "Home", offset: -100, to: "hero" },
  { id: "02", label: "Skills", offset: -80, to: "skills" },
  { id: "03", label: "About Me", offset: -80, to: "about" },
  { id: "04", label: "Projects", offset: -80, to: "projects" },
  { id: "04", label: "Contact", offset: -80, to: "contact" },
];

export const STATS = [
  { id: "01", count: "2", label: "Years of \nExperience" },
  { id: "02", count: "12", label: "Certifications \nEarned" },
  { id: "03", count: "20", label: "Projects \nCompleted" },
  { id: "04", count: "3+", label: "Happy \nClients" },
];

export const SKILL_TABS = [
  { id: "01", label: "All", value: "all" },
  { id: "02", label: "Frontend", value: "frontend" },
  { id: "03", label: "Backend", value: "backend" },
  { id: "04", label: "Tools", value: "tools" },
  { id: "04", label: "Devops", value: "devops" },
  { id: "05", label: "Database", value: "database" },
];

export const SKILLS = [
  {
    id: "01",
    icon: FaReact,
    skill: "React JS",
    progress: 95,
    type: "frontend",
    description:
      "Experienced in building scalable, component-driven web applications using React.js. Proficient in state management with Redux and React Hooks.",
  },
  {
    id: "02",
    icon: FaHtml5,
    skill: "HTML",
    progress: 99,
    type: "frontend",
    description:
      "Expert in structuring web content with semantic HTML, ensuring accessibility and SEO optimization.",
  },
  {
    id: "03",
    icon: FaCss3,
    skill: "CSS",
    progress: 90,
    type: "frontend",
    description:
      "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS.",
  },
  {
    id: "04",
    icon: BiLogoJavascript,
    skill: "JavaScript",
    progress: 92,
    type: "frontend",
    description:
      "Strong expertise in JavaScript, ES6+, and asynchronous programming concepts. Skilled in DOM manipulation and modern JavaScript frameworks.",
  },
  {
    id: "05",
    icon: SiTypescript,
    skill: "TypeScript",
    progress: 88,
    type: "frontend",
    description:
      "Well-versed in TypeScript, enhancing JavaScript with static typing and improving code maintainability.",
  },
  {
    id: "06",
    icon: SiTailwindcss,
    skill: "Tailwind CSS",
    progress: 85,
    type: "frontend",
    description:
      "Experienced in utility-first styling with Tailwind CSS to build highly responsive and customizable UIs efficiently.",
  },
  {
    id: "07",
    icon: SiBootstrap,
    skill: "Bootstrap",
    progress: 90,
    type: "frontend",
    description:
      "Skilled in using Bootstrap to develop responsive and mobile-first web applications with pre-built components.",
  },
  {
    id: "08",
    icon: FaJava,
    skill: "Java",
    progress: 80,
    type: "backend",
    description:
      "Strong understanding of Java, including OOP principles, multithreading, and backend development with Spring Boot.",
  },
  {
    id: "09",
    icon: FaPython,
    skill: "Python",
    progress: 75,
    type: "backend",
    description:
      "Experienced in Python scripting, automation, and backend development with frameworks like Django and Flask.",
  },
  {
    id: "10",
    icon: SiSpringboot,
    skill: "Spring Boot",
    progress: 78,
    type: "backend",
    description:
      "Hands-on experience with Spring Boot for building REST APIs, microservices, and integrating with databases.",
  },
  {
    id: "11",
    icon: SiExpress,
    skill: "Express.js",
    progress: 85,
    type: "backend",
    description:
      "Proficient in building RESTful APIs using Express.js and integrating with databases like MongoDB and MySQL.",
  },
  {
    id: "12",
    icon: SiNodedotjs,
    skill: "Node.js",
    progress: 88,
    type: "backend",
    description:
      "Skilled in developing scalable server-side applications with Node.js, including event-driven programming and API handling.",
  },
  {
    id: "13",
    icon: SiMongodb,
    skill: "MongoDB",
    progress: 80,
    type: "database",
    description:
      "Experienced in NoSQL databases, handling data modeling, aggregation pipelines, and optimizing MongoDB queries.",
  },
  {
    id: "14",
    icon: SiMysql,
    skill: "MySQL",
    progress: 85,
    type: "database",
    description:
      "Strong knowledge of relational databases, designing schemas, writing optimized queries, and handling transactions.",
  },
  {
    id: "15",
    icon: SiDocker,
    skill: "Docker",
    progress: 75,
    type: "devops",
    description:
      "Experienced in containerization with Docker, creating Dockerfiles, and managing containers for development and deployment.",
  },
  {
    id: "16",
    icon: SiIntellijidea,
    skill: "IntelliJ IDEA",
    progress: 90,
    type: "tools",
    description:
      "Proficient in using IntelliJ IDEA for Java development, debugging, and optimizing workflows.",
  },
  {
    id: "18",
    icon: SiFigma,
    skill: "Figma",
    progress: 80,
    type: "tools",
    description:
      "Capable of designing UI/UX prototypes, wireframes, and high-fidelity mockups using Figma.",
  },
  {
    id: "19",
    icon: SiReact,
    skill: "React Native",
    progress: 75,
    type: "fontend",
    description:
      "Hands-on experience in building cross-platform mobile applications using React Native and Expo.",
  },
  {
    id: "20",
    icon: VscVscode,
    skill: "VS Code",
    progress: 95,
    type: "tools",
    description:
      "Expert in using VS Code with extensions, debugging, and optimizing the development experience.",
  },
  {
    id: "21",
    icon: FaGitAlt,
    skill: "Git",
    progress: 90,
    type: "tools",
    description:
      "Proficient in version control with Git, handling branches, merges, and collaborative workflows with GitHub.",
  },
];

export const ABOUT_ME = {
  content: `Hey there! I'm a passionate developer who loves bringing ideas to life with Programming. My journey started with a simple curiosity—"How does the web make things come alive?"—and ever since, I've been hooked on building smooth, interactive experiences.

I enjoy creating dynamic user interfaces, making apps run faster, and diving into the logic behind the scenes. Turning ideas into real, working products is what excites me the most!\n

When I'm not coding, you'll probably find me listening to music, exploring new tech trends, sketching UI ideas, or just sipping coffee while figuring out life's little puzzles. 😉\n

Let's build something awesome together!`,

  socialLinks: [
    { id: "01", label: "Facebook", icon: FaFacebook, link: "#" },
    { id: "02", label: "Instagram", icon: FaInstagram, link: "#" },
    { id: "03", label: "Twitter", icon: FaTwitter, link: "#" },
    {
      id: "04",
      label: "LinkedIn",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/pavithrani-perera-343b542ab/",
    },
  ],

  email: "pererapavithrani02@gmail.com",
  phone: "+1 (123) 456-7890",
  website: "https://yourportfolio.com",
};

export const PROJECTS = [
  {
    id: "01",
    name: "Cafe Management System",
    image: Project_01,
    description:
      "A system to manage reservations, customers, and items efficiently, featuring SMTP for email notifications.",
    technologies: ["Java", "JavaFX", "CSS", "SMTP"],
    link: "https://github.com/yourusername/cafe-management",
  },

  {
    id: "02",
    name: "Supermarket POS System",
    image: Project_02,
    description:
      "A web-based POS system for supermarkets, enabling efficient billing, inventory management, and customer transactions.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "https://github.com/yourusername/supermarket-pos",
  },
  {
    id: "03",
    name: "Portfolio Website",
    image: Project_03,
    description: `💻 A dynamic and stylish portfolio showcasing my skills, projects, and achievements. `,
    technologies: ["HTML", " CSS", "Javascript"],
    link: "https://github.com/pavithraniperera/my-profile/tree/styles",
  },
  {
    id: "04",
    name: "Crop Management System",
    image: Project_04,
    description:
      "A web-based system for managing crop cultivation, tracking field activities, and monitoring growth cycles with a user-friendly interface.",
    technologies: [
      "Spring Boot",
      "MySQL",
      "Hibernate",
      "Bootstrap",
      "HTML",
      "JavaScript",
      "Axios",
    ],
    link: "https://github.com/pavithraniperera/Green-shadow-Project",
  },
  {
    id: "05",
    name: "Job Search App",
    image: Project_05,
    description:
      "A mobile app that helps users find jobs easily with real-time job listings and filters. Built with React Native and JSearch API.",
    technologies: ["React Native", "Tailwind CSS", "Axios", "JSearch API"],
    link: "https://github.com/pavithraniperera/JobSearch-app-with-React-native",
  },
];
