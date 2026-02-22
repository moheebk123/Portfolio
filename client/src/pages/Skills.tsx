import { Wrapper, Header, SkillSection } from "../components";
import { skillSections } from "../data/skills";
import skill from "../assets/img/skills/skill.png"

function Skills() {
  return (
    <Wrapper classes="grid place-content-center text-white">
      <Header
        headingOne="My Development"
        headingTwo="Skill Set"
        imgUrl={skill}
        alt="Skill Logo"
        className=""
      />

      <div className="w-full max-w-7xl h-fit relative">
        {skillSections.map((skill, index) => (
          <SkillSection
            key={index}
            index={index}
            skillSection={skill}
          />
        ))}
      </div>
    </Wrapper>
  );
}

export default Skills;
