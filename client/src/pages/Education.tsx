import { Wrapper, Header, EducationCard } from "../components";
import { educations } from "../data/educations";
import education from "../assets/img/education/education.png";

const Education = () => {
  return (
    <Wrapper classes="">
      <Header
        headingOne="My Educational"
        headingTwo="Background"
        imgUrl={education}
        alt="Education Logo"
        className="w-1/2"
      />
      <section className="flex flex-col items-center min-h-screen">
        <div className="relative w-full md:max-w-6xl">
          <div className="absolute -left-5 md:left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300"></div>
          {educations.map((education, index) => (
            <EducationCard
              key={education.id}
              x={(index + 1) % 2 === 0 ? -100 : 100}
              positionRight={(index + 1) % 2 === 0 ? true : false}
              education={education}
            />
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default Education;
