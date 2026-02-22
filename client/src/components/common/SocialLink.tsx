import { useContext } from "react";
import { motion } from "framer-motion";
import propTypes from "prop-types";
import { CursorContext } from "../../context/CursorContext";

interface SocialLink {
  id: number;
  delay: number;
  imgUrl: string;
  alt: string;
  link: string;
}

const SocialLink = ({socialLink}: {socialLink: SocialLink}) => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.a
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        delay: socialLink.delay / 1000,
        duration: 300 / 1000,
      }}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      href={socialLink.link}
      target="blank"
    >
      <img
        className={`${
          socialLink.alt === "GitHub Logo" ? "h-16 w-16" : "h-10 w-10"
        } ease-in-out duration-200 hover:scale-115`}
        src={socialLink.imgUrl}
        alt={socialLink.alt}
      />
    </motion.a>
  );
};

SocialLink.propTypes = {
  socialLink: propTypes.shape({
    delay: propTypes.number.isRequired,
    imgUrl: propTypes.string.isRequired,
    alt: propTypes.string.isRequired,
    link: propTypes.string.isRequired,
  }).isRequired,
};

export default SocialLink;
