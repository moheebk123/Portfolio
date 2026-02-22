import urlShortener from "../assets/img/projects/url-shortener.png"
import taskBoard from "../assets/img/projects/task-board.png"
import css from "../assets/img/skills/css.png";
import javascript from "../assets/img/skills/javascript.png";
import react from "../assets/img/skills/react.png";

interface Project {
  heading: string;
  description: string;
  liveLink: string;
  skills: string;
  imgUrl: string;
  alt: string;
}

export const projects: Project[] = [
  {
    heading: "Url Shortener",
    description:
      "URL Shortener built with Node.js, Express, and MongoDB that allows users to generate short links, manage them, and handle secure redirection.",
    liveLink: "https://mku-short.onrender.com/",
    skills:
      "Node.js, Express.js, MongoDB, EJS, Nodemailer (Send Email), Multer and Cloudinary (File Upload), Arctic (OAuth Login)",
    imgUrl: urlShortener,
    alt: "Url Shortener Logo",
  },
  {
    heading: "Real-Time Collaborative Task Board",
    description:
      "Built a real-time collaborative task board using MERN and Socket.IO with live drag-and-drop, smart assignment, and conflict handling for seamless multi-user task management.",
    liveLink: "https://to-do-board-one.vercel.app",
    skills:
      "React, Redux Toolkit, Node.js, Express.js, Socket.IO, MongoDB",
    imgUrl: taskBoard,
    alt: "Real-Time Collaborative Task Board",
  },
  {
    heading: "React Projects",
    description:
      "Developed a webpage showcasing 10 React projects with preview images, live links for direct access, and code repository links to highlight advanced React skills and provide detailed insights into each project.",
    liveLink: "https://moheeb-khan-react-projects.vercel.app",
    skills:
      "React.js, React Router, Redux Toolkit, Material UI, Appwrite",
    imgUrl: react,
    alt: "React Logo",
  },
  {
    heading: "JavaScript Projects",
    description:
    "Developed a webpage featuring 51 JavaScript projects with preview images, live links for direct access, and code repository links to showcase technical skills from basic to advanced levels.",
    liveLink: "https://moheeb-khan-javascript-projects.vercel.app",
    skills: "HTML, CSS, JavaScript",
    imgUrl: javascript,
    alt: "JavaScript Logo",
  },
  {
    heading: "CSS Projects",
    description:
      "Developed a webpage showcasing 16 CSS projects with preview images, live links for direct access, and code repository links to demonstrate technical skills and project details.",
    liveLink: "https://moheeb-khan-css-projects.vercel.app",
    skills: "HTML, CSS, Tailwind CSS, Bootstrap",
    imgUrl: css,
    alt: "CSS Logo",
  },
];
