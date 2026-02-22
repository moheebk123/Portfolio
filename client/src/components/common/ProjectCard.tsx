import propTypes from "prop-types";
import { motion } from "framer-motion";
import TiltImage from "./TiltImage";
import { useContext } from "react";
import { CursorContext } from "../../context/CursorContext";

interface Project {
  heading: string;
  description: string;
  liveLink: string;
  skills: string;
  imgUrl: string;
  alt: string;
}

interface ProjectCard {
  rowReverse: boolean;
  y: number;
  project: Project;
}
const ProjectCard = ({ rowReverse, y, project }: ProjectCard) => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <div
      className={`flex w-full flex-col-reverse justify-center ${
        rowReverse ? "md:flex-row-reverse" : "md:flex-row"
      } gap-10 items-center  my-28`}
    >
      <motion.div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="w-full md:w-1/2 text-center md:text-left mb-20 md:mb-0"
      >
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
          className="text-2xl underline underline-offset-8 md:no-underline font-semibold mb-5"
        >
          {project.heading}
        </motion.h1>
        <motion.p
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
          className="text-xl mb-8"
        >
          {project.description}
        </motion.p>
        <motion.p
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.6 }}
          className="text-xl text-gray-400 font-bold mb-8"
        >
          <span className="text-white">Tech Stack:</span> {project.skills}
        </motion.p>
        <motion.a
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.8 }}
          href={project.liveLink}
          target="blank"
        >
          <button className="transition ease-in-out duration-700 text-black bg-white px-20 py-2 text-lg font-bold rounded-xl hover:text-white hover:bg-black hover:cursor-pointer">
            {project.heading === "Real-Time Collaboration Text Editor"
              ? "Drive Video Link"
              : "Live"}
          </button>
        </motion.a>
      </motion.div>
      <div className="w-full md:w-1/2 grid place-content-center">
        <motion.div
          initial={{ y: y, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          <TiltImage
            imgUrl={project.imgUrl}
            alt={project.alt}
            className={`${
              project.heading === "Real-Time Collaboration Text Editor"
                ? "bg-[#f0f0f0] rounded-[50px] w-64 h-64"
                : "w-72 h-72"
            }`}
          />
        </motion.div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  rowReverse: propTypes.bool.isRequired,
  y: propTypes.number,
  project: propTypes.shape({
    heading: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    liveLink: propTypes.string.isRequired,
    skills: propTypes.string.isRequired,
    imgUrl: propTypes.string.isRequired,
    alt: propTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
