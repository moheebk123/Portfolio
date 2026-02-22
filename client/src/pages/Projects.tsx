import { Wrapper, Header, ProjectCard } from "../components";
import { projects } from "../data/projects";
import project from "../assets/img/projects/project.png";

const Projects = () => {
  return (
    <Wrapper classes="text-white">
      <Header
        headingOne="Explore My"
        headingTwo="Some Projects"
        imgUrl={project}
        alt="Project Logo"
        className=""
      />
      <section>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            y={index === 1 ? -100 : 100}
            rowReverse={(index + 1) % 2 === 0 ? true : false}
            project={project}
          />
        ))}
      </section>
    </Wrapper>
  );
};

export default Projects;
