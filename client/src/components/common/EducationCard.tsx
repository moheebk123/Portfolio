import { motion } from "framer-motion";
import propTypes from "prop-types";

interface Education {
  id: number;
  class?: string;
  course: string;
  institute: string;
  marks: string;
  year: string;
  marksheetUrl: string;
  imgUrl: string;
}

interface EducationCard {
  education: Education;
  x: number;
  positionRight: boolean;
}

const EducationCard = ({ education, x, positionRight }: EducationCard) => {
  return (
    <div className="md:grid grid-cols-2 gap-8 mb-10 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute -left-5 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-6 w-6 bg-blue-500 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ x: x, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className={`${
          positionRight
            ? "md:col-start-2 md:col-end-3 justify-start"
            : "md:col-start-1 md:col-end-2 justify-end"
        } flex`}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-3/4 font-semibold">
          <h3 className="text-lg lg:text-2xl mb-2 text-center border-b">
            {education.class && education.class}
            {education.class && <sup>th</sup>} {education.course}
          </h3>
          <h4 className="text-center lg:text-xl mb-2 grid lg:px-10">
            {education.institute}
          </h4>
          <div className="flex w-full h-fit gap-5 items-center text-sm lg:text-lg">
            {education.imgUrl && (
              <img
              src={education.imgUrl}
              alt="Tenth Marksheet"
              className="w-18"
              />
            )}
            <div>
              <p className="text-gray-900">{education.year}</p>
              <p className="text-gray-700">{education.marks}</p>
              {education.marksheetUrl && (
              <a
                href={education.marksheetUrl}
                target="_blank"
                  rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 underline"
              >
                Marksheet
              </a>
            )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

EducationCard.propTypes = {
  x: propTypes.number.isRequired,
  positionRight: propTypes.bool.isRequired,
  education: propTypes.shape({
    class: propTypes.string,
    course: propTypes.string.isRequired,
    institute: propTypes.string.isRequired,
    marks: propTypes.string.isRequired,
    year: propTypes.string.isRequired,
    marksheetUrl: propTypes.string,
    imgUrl: propTypes.string,
  }),
};

export default EducationCard;
