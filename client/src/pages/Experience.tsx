import { Wrapper, Header, ExperienceCard } from "../components";
import experience from "../assets/img/experience/experience.png";
import { experiences } from "../data/experiences";

const Experience = () => {
  return (
    <Wrapper classes="text-white">
      <Header
        headingOne="My Professional"
        headingTwo="Experience"
        imgUrl={experience}
        alt="Experience Logo"
        className=""
      />
      {experiences.map((experience, index) => (
        <ExperienceCard key={index} experience={experience} />
      ))}
    </Wrapper>
  );
};

export default Experience;
