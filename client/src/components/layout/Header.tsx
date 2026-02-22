import { useContext } from "react";
import { motion } from "framer-motion";
import propTypes from "prop-types";
import { CursorContext } from "../../context/CursorContext";
import TiltImage from "../common/TiltImage";

interface Header {
  headingOne: string;
  headingTwo: string;
  imgUrl: string;
  alt: string;
  className: string;
}

const Header = ({ headingOne, headingTwo, imgUrl, alt, className }: Header) => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <div className="text-white w-full max-w-6xl lg:col-start-1 lg:col-span-2 flex flex-col gap-5 md:flex-row items-center justify-center mb-20">
      <div className="text-center md:text-left mb-6 lg:mb-0">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="text-4xl font-bold mb-4"
        >
          {headingOne}
        </motion.h2>
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 300 / 1000 }}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="text-4xl font-bold mb-4"
        >
          {headingTwo}
        </motion.h2>
      </div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className={className ? className : ""}
      >
        <TiltImage imgUrl={imgUrl} alt={alt} />
      </motion.div>
    </div>
  );
};

Header.propTypes = {
  headingOne: propTypes.string.isRequired,
  headingTwo: propTypes.string.isRequired,
  imgUrl: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  className: propTypes.string,
};

export default Header;
