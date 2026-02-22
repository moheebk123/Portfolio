import { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CursorContext } from "../context/CursorContext";
import { Wrapper, TiltImage } from "../components";
import profile from "../assets/img/home/profile.jpg";

const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <Wrapper classes="flex flex-col-reverse gap-5 md:flex-row items-center justify-evenly md:justify-between">
      <div className="md:w-1/2 w-full flex flex-col items-center md:items-start text-center md:text-left space-y-6">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 300 / 1000,
          }}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="text-3xl md:text-4xl text-white font-bold"
        >
          Hi, I&apos;m <br />
          <motion.span
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 300 / 1000,
              duration: 300 / 1000,
            }}
            className="text-cyan-400 text-4xl md:text-5xl"
          >
            Moheeb Khan
          </motion.span>
        </motion.h1>
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 400 / 1000,
            duration: 300 / 1000,
          }}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="text-2xl font-semibold md:text-3xl text-gray-300"
        >
          Software Developer
        </motion.h2>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 500 / 1000,
            duration: 300 / 1000,
          }}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="text-lg text-gray-300"
        >
          Crafting engaging and intuitive user experiences with modern web
          technologies (MERN Stack).
        </motion.p>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 600 / 1000,
            duration: 300 / 1000,
          }}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="flex space-x-4"
        >
          <a
            href="https://drive.google.com/file/d/1mM3Cv-Slp7PgOkgsy0tPOs_pwc5fRsH_/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-100 text-black font-semibold py-2 px-6 rounded-md shadow-lg hover:bg-transparent hover:border hover:border-white hover:text-white hover:scale-110 ease-in-out duration-300 transition"
          >
            View Resume
          </a>
          <Link
            to="/contact"
            className="border border-white text-white font-semibold py-2 px-6 rounded-md shadow-lg hover:bg-white hover:text-black hover:scale-110 ease-in-out duration-300 transition"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 500 / 1000,
        }}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="md:w-1/2 w-full flex justify-center md:justify-end mb-0 lg:mb-0"
      >
        <TiltImage
          imgUrl={profile}
          alt="Moheeb Khan"
          className="w-64 h-64 sm:w-96 sm:h-96 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-lg"
        />
      </motion.div>
    </Wrapper>
  );
};

export default Home;
