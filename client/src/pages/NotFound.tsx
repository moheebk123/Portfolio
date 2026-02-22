import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CursorContext } from "../context/CursorContext";
import { Wrapper } from "../components";
import notFound from "../assets/img/not-found/not-found.png";

const NotFoundPage = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <Wrapper classes="flex flex-col items-center justify-center text-white">
      <motion.img
        src={notFound}
        alt="404 Not Found"
        className="w-1/2 md:w-1/3 mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      />
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        404
      </motion.h1>
      <motion.p
        className="text-lg mb-8 text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        Oops! The page you’re looking for doesn’t exist.
      </motion.p>
      <motion.button
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg ease-in-out hover:scale-110 transition duration-300 cursor-pointer"
      >
        <Link to="/">Go Back Home</Link>
      </motion.button>
    </Wrapper>
  );
};

export default NotFoundPage;
