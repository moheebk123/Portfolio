import { useContext } from "react";
import { motion } from "framer-motion";
import propTypes from "prop-types";
import { CursorContext } from "../../context/CursorContext";

interface ContactLink {
  id: number;
  delay: number;
  imgUrl: string;
  alt: string;
  link: string;
  text: string;
}

const ContactLink = ({ contactLink }: {contactLink: ContactLink}) => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.p
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        delay: contactLink.delay / 1000,
        duration: 300 / 1000,
      }}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="text-xl flex gap-4 items-center my-3"
    >
      <img src={contactLink.imgUrl} className="w-8" alt={contactLink.alt} />
      <a
        href={contactLink.link}
        target="_blank"
        className="hover:underline hover:underline-offset-8 hover:scale-105 duration-300 ease-in-out transition-all"
      >
        {contactLink.text}
      </a>
    </motion.p>
  );
};

ContactLink.propTypes = {
  contactLink: propTypes.shape({
    delay: propTypes.number.isRequired,
    imgUrl: propTypes.string.isRequired,
    alt: propTypes.string.isRequired,
    link: propTypes.string.isRequired,
    text: propTypes.string.isRequired,
  }).isRequired,
};

export default ContactLink;
