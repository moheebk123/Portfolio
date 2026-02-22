import html from "../assets/img/skills/html.png";
import css from "../assets/img/skills/css.png";
import javascript from "../assets/img/skills/javascript.png";
import bootstrap from "../assets/img/skills/bootstrap.png";
import tailwind from "../assets/img/skills/tailwindcss.png";
import react from "../assets/img/skills/react.png";
import router from "../assets/img/skills/router.png";
import redux from "../assets/img/skills/redux.png";
import reactTesting from "../assets/img/skills/react-testing-library.png";
import typescript from "../assets/img/skills/typescript.png";
import materialui from "../assets/img/skills/materialUI.png";
import zendexGarden from "../assets/img/skills/zendexGarden.png";
import framerMotion from "../assets/img/skills/framerMotion.png";
import styledComponents from "../assets/img/skills/styledComponents.png";

import nodeJs from "../assets/img/skills/nodeJs.png";
import expressJs from "../assets/img/skills/expressJs.png";
import appwrite from "../assets/img/skills/appwrite.png";
import socketIO from "../assets/img/skills/socketIO.png"
import ejs from "../assets/img/skills/ejs.png"
import jwt from "../assets/img/skills/jwt.png"
import bcrypt from "../assets/img/skills/bcrypt.png";
import argon2 from "../assets/img/skills/argon2.png";
import cookieParser from "../assets/img/skills/cookieParser.png";
import google from "../assets/img/skills/google.png";
import multer from "../assets/img/skills/multer.png";
import cloudinary from "../assets/img/skills/cloudinary.png";
import nodeMailer from "../assets/img/skills/nodeMailer.png";

import mongoDB from "../assets/img/skills/mongoDB.png";
import mysql from "../assets/img/skills/mysql.png";
import prisma from "../assets/img/skills/prisma.png";

import git from "../assets/img/skills/git.png";
import github from "../assets/img/skills/github.png";
import vsCode from "../assets/img/skills/vsCode.png";
import chatGpt from "../assets/img/skills/chatGpt.png";
import compass from "../assets/img/skills/mongoDB.png";
import postman from "../assets/img/skills/postman.png";

import vercel from "../assets/img/skills/vercel.png";
import render from "../assets/img/skills/render.png";
import hostinger from "../assets/img/skills/hostinger.png";

interface Skill {
  imgUrl: string;
  imgName: string;
}

interface SkillSection {
  heading: string;
  skills: Skill[]
}

export const skillSections: SkillSection[] = [
  {
    heading: "Frontend",
    skills: [
      {
        imgUrl: html,
        imgName: "HTML",
      },
      {
        imgUrl: css,
        imgName: "CSS",
      },
      {
        imgUrl: javascript,
        imgName: "JavaScript",
      },
      {
        imgUrl: bootstrap,
        imgName: "Bootstrap",
      },
      {
        imgUrl: tailwind,
        imgName: "Tailwind CSS",
      },
      {
        imgUrl: react,
        imgName: "React",
      },
      {
        imgUrl: router,
        imgName: "React Router",
      },
      {
        imgUrl: redux,
        imgName: "Redux Toolkit",
      },
      {
        imgUrl: reactTesting,
        imgName: "React Testing",
      },
      {
        imgUrl: typescript,
        imgName: "Typescript",
      },
      {
        imgUrl: materialui,
        imgName: "MaterialUI",
      },
      {
        imgUrl: zendexGarden,
        imgName: "Zendex Garden",
      },
      {
        imgUrl: framerMotion,
        imgName: "Framer Motion",
      },
      {
        imgUrl: styledComponents,
        imgName: "Styled Components",
      },
    ],
  },
  {
    heading: "Backend",
    skills: [
      {
        imgUrl: nodeJs,
        imgName: "Node.Js",
      },
      {
        imgUrl: expressJs,
        imgName: "Express.Js",
      },
      {
        imgUrl: appwrite,
        imgName: "Appwrite",
      },
      {
        imgUrl: socketIO,
        imgName: "Socket.IO",
      },
      {
        imgUrl: ejs,
        imgName: "EJS",
      },
      {
        imgUrl: jwt,
        imgName: "JWT",
      },
      {
        imgUrl: bcrypt,
        imgName: "Bcrypt",
      },
      {
        imgUrl: argon2,
        imgName: "Argon2",
      },
      {
        imgUrl: cookieParser,
        imgName: "Cookie Parser",
      },
      {
        imgUrl: google,
        imgName: "Google OAuth",
      },
      {
        imgUrl: github,
        imgName: "GitHub OAuth",
      },
      {
        imgUrl: multer,
        imgName: "Multer",
      },
      {
        imgUrl: cloudinary,
        imgName: "Cloudinary",
      },
      {
        imgUrl: nodeMailer,
        imgName: "Node Mailer",
      },
    ],
  },
  {
    heading: "Databases",
    skills: [
      {
        imgUrl: mongoDB,
        imgName: "MongoDB",
      },
      {
        imgUrl: mysql,
        imgName: "MySql",
      },
      {
        imgUrl: prisma,
        imgName: "Prisma",
      },
    ],
  },
  {
    heading: "Dev Tools",
    skills: [
      {
        imgUrl: git,
        imgName: "Git",
      },
      {
        imgUrl: github,
        imgName: "GitHub",
      },
      {
        imgUrl: vsCode,
        imgName: "VS Code",
      },
      {
        imgUrl: chatGpt,
        imgName: "Chat GPT",
      },
      {
        imgUrl: compass,
        imgName: "Compass",
      },
      {
        imgUrl: postman,
        imgName: "Postman",
      },
    ],
  },
  {
    heading: "Deployment",
    skills: [
      {
        imgUrl: vercel,
        imgName: "Vercel",
      },
      {
        imgUrl: render,
        imgName: "Render",
      },
      {
        imgUrl: hostinger,
        imgName: "Hostinger",
      },
    ],
  },
];
