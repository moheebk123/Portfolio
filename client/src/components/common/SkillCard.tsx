import { useLayoutEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import propTypes from "prop-types";
import { motion } from "framer-motion";

interface Skill {
  imgUrl: string;
  imgName: string;
  index: number;
}

const SkillCard = ({ imgUrl, imgName, index }: Skill) => {
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    VanillaTilt.init(cardRef.current);
  });

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        delay: (50 + (index + 1) * 100) / 1000,
        duration: 200 / 1000,
      }}
      style={{
        perspective: "500px",
      }}
      ref={cardRef}
      className="flex cursor-pointer backdrop-blur rounded-xl bg-[#b3b0b039] justify-center items-center gap-5 h-full w-full min-h-24 px-2 py-4"
    >
      <img src={imgUrl} alt={imgName} className="h-20" />
      <div className="text-lg font-bold">{imgName}</div>
    </motion.div>
  );
};

SkillCard.propTypes = {
  imgUrl: propTypes.string.isRequired,
  imgName: propTypes.string.isRequired,
  index: propTypes.number.isRequired,
};

export default SkillCard;
