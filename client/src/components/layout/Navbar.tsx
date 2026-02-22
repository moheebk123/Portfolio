import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import propTypes from "prop-types";
import { CursorContext } from "../../context/CursorContext";
import logo from "../../assets/img/navbar/logo.png";
import bar from "../../assets/img/navbar/bar.png";

const Navbar = ({ setIsSidebarOpen }: { setIsSidebarOpen: (arg0: boolean) => void }) => {
  const [hidden, setHidden] = useState(false);

  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.div
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="bg-slate-100/50 backdrop-blur-md rounded-full px-10 py-2 fixed z-10 max-w-7xl w-[88vw] h-14 flex justify-end md:justify-between items-center shadow-lg translate-x-4 md:translate-x-10 xl:translate-x-2 -mt-3"
    >
      <motion.div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="hidden md:block"
      >
        <Link to={"/"}>
          <img className="w-36" src={logo} alt="Moheeb Khan" />
        </Link>
      </motion.div>
      <motion.div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="text-black flex gap-6 text-2xl cursor-pointer"
        onClick={() => setIsSidebarOpen(true)}
      >
        <img src={bar} className="w-14" alt="Menu Icon" />
      </motion.div>
    </motion.div>
  );
};

Navbar.propTypes = {
  setIsSidebarOpen: propTypes.func.isRequired,
};

export default Navbar;
