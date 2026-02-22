import { useContext } from "react";
import { motion } from "framer-motion";
import { CursorContext } from "../../context/CursorContext";
import propTypes from "prop-types";

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

const ExperienceCard = ({ experience }: {experience: Experience}) => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 2 }}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl mx-auto mb-10"
    >
      <div className="flex flex-col sm:flex-row gap-5 items-center">
        {experience.companyImgUrl && (
          <img
            src={experience.companyImgUrl}
            className="h-full w-36 bg-white px-4 py-2 rounded-lg"
            alt={experience.companyName}
          />
        )}
        <div className="flex flex-col gap-1 items-center sm:items-start">
          <h2 className="text-2xl text-center sm:text-left font-semibold">
            {experience.companyUrl ? (
              <a
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 underline duration-300 ease-in-out"
              >
                {experience.companyName}
              </a>
            ) : (
              experience.companyName
            )}
          </h2>
          <h3 className="text-xl text-blue-400">{experience.role}</h3>
          <p className="text-gray-300">{experience.duration}</p>
        </div>
      </div>
      <ul className="ml-5 flex flex-col my-5 list-disc">
        {experience.details.map((detail, index) => (
          <li key={index} className="text-lg text-gray-200">
            {detail}
          </li>
        ))}
      </ul>
      {experience.workLinks && (
        <>
          <h3 className="text-lg text-left font-semibold">Work Link{experience.workLinks.length > 1 && "s"}</h3>
          <ul className="ml-1 flex flex-col my-2 list-disc">
            {experience.workLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 underline"
              >
                {link.text}
              </a>
            ))}
          </ul>
        </>
      )}
    </motion.div>
  );
};

ExperienceCard.propTypes = {
  experience: propTypes.shape({
    companyImgUrl: propTypes.string,
    companyUrl: propTypes.string,
    companyName: propTypes.string.isRequired,
    role: propTypes.string.isRequired,
    duration: propTypes.string.isRequired,
    details: propTypes.arrayOf(propTypes.string),
    workLinks: propTypes.arrayOf(
      propTypes.shape({
        text: propTypes.string.isRequired,
        url: propTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default ExperienceCard;
