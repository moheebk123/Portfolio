import ccp from "../assets/img/experience/ccp.png";
import aetherproHealthcare from "../assets/img/experience/aetherpro-healthcare.png";
import higherEducation from "../assets/img/experience/higher-education.png";
import iqlTechnologies from "../assets/img/experience/iql-technology.png";

interface WorkLink {
  text: string;
  url: string;
}

interface Experience {
  companyImgUrl: string;
  companyUrl: string;
  companyName: string;
  role: string;
  duration: string;
  details: string[];
  workLinks?: WorkLink[];
}

export const experiences: Experience[] = [
  {
    companyImgUrl: ccp,
    companyUrl: "https://highereducation.org.in",
    companyName: "Higher Education (YouTube)",
    role: "Software Engineer",
    duration: "Sep, 2025 - Present",
    details: [
      "Leading end-to-end development of the Common Counselling Portal from scratch, handling planning, architecture, and technical decisions across 10+ core modules.",
      "Designed and implemented key features like registration, choice filling, seat allotment workflows, and admin dashboards, supporting 1,000+ expected concurrent users.",
      "Managing UI structure, backend integrations, testing, and deployment of the live platform (commoncounsellingportal.com) to ensure scalable production readiness.",
    ],
    workLinks: [
      {
        text: "commoncounsellingportal.com",
        url: "https://commoncounsellingportal.com",
      },
    ],
  },
  {
    companyImgUrl: aetherproHealthcare,
    companyUrl: "https://www.aetherprohealth.com/",
    companyName: "Aetherpro Healthcare",
    role: "Full Stack Developer Intern",
    duration: "Jul, 2025",
    details: [
      "Developed 10+ responsive dashboard screens for hospital operations used by medical and administrative teams using Next.js and Tailwind.",
      "Improved UI consistency and readability, reducing user navigation time by 20%.",
      "Collaborated with backend developers to align 15+ API endpoints, ensuring smooth data flow across modules.",
    ],
  },
  {
    companyImgUrl: higherEducation,
    companyUrl: "https://www.youtube.com/@highereducationofficial",
    companyName: "Higher Education (YouTube)",
    role: "Web Developer Intern",
    duration: "Jan, 2025 - Feb, 2025",
    details: [
      "Led development of the organization’s main website and admin panel, improving page performance by 30%.",
      "Built 8+ dynamic sections, integrated multiple APIs, and handled deployment with zero downtime during launch.",
      "Delivered the complete website (highereducation.org.in) ahead of the expected timeline.",
    ],
    workLinks: [
      { text: "highereducation.org.in", url: "https://highereducation.org.in" },
    ],
  },
  {
    companyImgUrl: iqlTechnologies,
    companyUrl: "https://iqltech.com/",
    companyName: "IQL Technologies",
    role: "Frontend Developer Intern",
    duration: "Aug, 2024",
    details: [
      "Developed a multi-passenger visa form used by 300+ applicants/month, with complete real-time validations.",
      "Integrated secure sessions and user authentication, reducing form-submission errors by 40%.",
      "Deployed the production app (getsaudivisa.vercel.app) with optimized components for faster load times."
    ],
    workLinks: [
      {
        text: "getsaudivisa.vercel.app",
        url: "https://getsaudivisa.vercel.app",
      },
    ],
  },
];
