import { useContext } from "react";
import { motion } from "framer-motion";
import { CursorContext } from "../../context/CursorContext";

const Cursor = () => {
  const { cursorVariants, cursorBackground } = useContext(CursorContext);

  return (
    <motion.div
      variants={cursorVariants}
      animate={cursorBackground}
      className={`w-8 h-8 bg-white fixed top-0 left-0 hidden md:block pointer-events-none z-50 rounded-full`}
    ></motion.div>
  );
};

export default Cursor;
