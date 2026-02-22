import { useLayoutEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import propTypes from "prop-types";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

interface Skill {
  imgUrl: string;
  imgName: string;
}

interface SkillSection {
  heading: string;
  skills: Skill[]
}

function SkillSection({ index, skillSection }: {index: number; skillSection: SkillSection}) {
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
      className="cursor-pointer backdrop-blur rounded-xl bg-[#b3b0b039] h-fit w-full mb-14 p-5"
    >
      <div className="text-3xl mb-5 font-bold text-center">{skillSection.heading}</div>
      <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {skillSection.skills.map((skill, index) => (
          <SkillCard
            key={index}
            index={index}
            imgUrl={skill.imgUrl}
            imgName={skill.imgName}
          />
        ))}
      </div>
    </motion.div>
  );
}

SkillSection.propTypes = {
  index: propTypes.number.isRequired,
  skillSection: propTypes.shape({
    heading: propTypes.string.isRequired,
    skills: propTypes.array.isRequired,
  }).isRequired,
};

export default SkillSection;
