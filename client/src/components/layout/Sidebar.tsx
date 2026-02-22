import { useContext, useEffect } from "react";
import propTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { CursorContext } from "../../context/CursorContext";
import cross from "../../assets/img/sidebar/cross.png";
import linkedIn from "../../assets/img/sidebar/linkedIn.png";
import gitHub from "../../assets/img/sidebar/github.png";

const Sidebar = ({
  activePage,
  changeActivePage,
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  activePage: string;
  changeActivePage: (arg0: string) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (arg0: boolean) => void;
}) => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  const navigate = useNavigate();
  const controls = useAnimation();
  const animationDuration = 300;

  useEffect(() => {
    if (isSidebarOpen) {
      controls.start({ x: 0, opacity: 1 });
    }
  }, [isSidebarOpen, controls]);

  const closeMenu = () => {
    controls.start({ x: 100, opacity: 0 });
    setTimeout(() => {
      setIsSidebarOpen(false);
    }, animationDuration);
  };

  const changeRoute = (sectionName: string) => {
    changeActivePage(sectionName);
    if (sectionName !== "HOME") {
      navigate(`./${sectionName.toLocaleLowerCase()}`);
    } else {
      navigate("/");
    }
    closeMenu();
  };

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={controls}
      transition={{ duration: animationDuration / 1000 }}
      className="box-shadow w-screen sm:w-fit h-screen bg-slate-900 text-white py-4 px-20 fixed z-20 -inset-y-1.5 right-0"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: (animationDuration + 100) / 1000 }}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="absolute top-2 right-2 cursor-pointer ease-in-out duration-200 hover:scale-75 text-2xl rounded-full p-1"
        onClick={closeMenu}
      >
        <img
          className="w-10 h-10 md:w-14 md:h-14"
          src={cross}
          alt="Close Icon"
        />
      </motion.div>
      <div className="relative w-full h-full">
        <div className="h-full flex flex-col items-start justify-center gap-2 sm:gap-4 font-bold text-3xl sm:text-4xl ">
          {[
            "HOME",
            "ABOUT",
            "Experience",
            "SKILLS",
            "PROJECTS",
            "EDUCATION",
            "ACHIEVEMENTS",
            "CONTACT",
          ].map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: (animationDuration + (index + 1) * 100) / 1000,
                  duration: animationDuration / 1000,
                }}
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                className={`menu-item ${
                  activePage === item ? "active" : ""
                } relative uppercase cursor-pointer overflow-hidden p-1`}
                data={item}
                onClick={() => changeRoute(item)}
              >
                <div>{item}</div>
              </motion.div>
            );
          })}
        </div>

        <div className="absolute flex justify-center items-center gap-3 w-full h-20 border-t border-slate-100 bottom-0 text-5xl">
          <motion.a
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: (animationDuration + 300) / 1000,
              duration: animationDuration / 1000,
            }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            href="https://www.linkedin.com/in/moheebkhan/"
            target="blank"
          >
            <img
              className="h-12 w-12 ease-in-out duration-200 hover:scale-125"
              src={linkedIn}
              alt="LinkedIn Logo"
            />
          </motion.a>
          <motion.a
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: (animationDuration + 400) / 1000,
              duration: animationDuration / 1000,
            }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            href="https://github.com/moheebk123"
            target="blank"
          >
            <img
              className="h-20 w-20 ease-in-out duration-200 hover:scale-125"
              src={gitHub}
              alt="GitHub Logo"
            />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

Sidebar.propTypes = {
  activePage: propTypes.string.isRequired,
  isSidebarOpen: propTypes.bool.isRequired,
  setIsSidebarOpen: propTypes.func.isRequired,
  changeActivePage: propTypes.func.isRequired,
};

export default Sidebar;
