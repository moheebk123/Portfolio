import { useContext } from "react";
import { motion } from "framer-motion";
import { CursorContext } from "../context/CursorContext";
import { Header, Wrapper } from "../components";
import about from "../assets/img/about/about.png";

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <Wrapper classes="text-white grid lg:grid-cols-2 gap-16">
      <Header
        headingOne="Get to Know,"
        headingTwo="Who I am."
        imgUrl={about}
        alt="About Logo"
        className=""
      />
      {/* Summary Section */}
      <motion.section
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 200 / 1000 }}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-300">
          Passionate software developer with a strong foundation in modern web
          technologies, specializing in creating dynamic and responsive user
          interfaces to solve real-world problems.
        </p>
      </motion.section>

      {/* Personal Story Section */}
      <motion.section
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 400 / 1000 }}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Personal Story</h2>
        <ul className="text-lg text-gray-300 list-disc ml-5">
          <li>
            My journey in software development began with a fascination for how
            websites function and interact with users.
          </li>
          <li>
            This led me to pursue BCA and gain hands-on experience through
            various projects.
          </li>
        </ul>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 400 / 1000 }}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Experience</h2>
        <ul className="text-lg text-gray-300 list-disc ml-5">
          <li>
            As Freelance Software Developer. Led development of 3 major client
            projects from start to delivery, built a complete counselling system
            and 2 business web apps, designed UIs for a game company and managed
            project workflows.
          </li>
          <li>
            Completed a one-month internship, at Aetherpro HealthCare as a
            Full-Stack Developer Intern. During the internship, built hospital
            dashboard screens with responsive design, focused on clean layouts
            for medical workflows.
          </li>
          <li>
            Completed a three-month internship, at Higher Education (YouTube) as
            a Web Developer Intern. During the internship, Led the development
            of their official website with an admin pane from scratch.
          </li>
          <li>
            Completed a one-month internship, at IQL Technologies as a Frontend
            Developer Intern. During the internship, I successfully built a
            fully functional visa portal from scratch.
          </li>
        </ul>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 400 / 1000 }}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Achievements</h2>
        <ul className="text-lg text-gray-300 list-disc ml-5">
          <li>
            Completed 10 React, over 50+ JavaScript, and 16 CSS, 2 Full Stack
            (MERN) projects showcased in my portfolio.
          </li>
          <li>
            I achieved First Position in Blind Coding, highlighting my Java
            skills.
          </li>
          <li>
            I secured Third Position in Dark Coding highlighting my Python
            skills.
          </li>
          <li>
            We get a Third Position in Web-Hive, excelling in HTML and CSS,
            where I led a team.
          </li>
        </ul>
      </motion.section>

      {/* Education Section */}
      <motion.section
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 200 / 1000 }}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Education</h2>
        <ul className="text-lg text-gray-300 list-disc ml-5">
          <li>
            Completed my BCA from Guru Gobind Singh Indraprastha University.
          </li>
          <li>
            Completed Secondary and Secondary Examination from CBSE Board.
          </li>
        </ul>
      </motion.section>

      {/* Hobbies/Interests Section */}
      <motion.section
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 400 / 1000 }}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        <h2 className="text-3xl font-bold mb-4">Hobbies / Interests</h2>
        <ul className="text-lg text-gray-300 list-disc ml-5">
          <li>Passionate about outdoor adventures</li>
          <li>Love traveling to new places</li>
          <li>Enthusiastic about exploring new technologies</li>
          <li>Enjoy connecting with people</li>
          <li>Interested in immersing myself in diverse cultures</li>
          <li>Try engage in tech events</li>
        </ul>
      </motion.section>
    </Wrapper>
  );
};

export default About;
