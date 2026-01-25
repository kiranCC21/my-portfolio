import ProjectCard from "../components/ProjectCard";
import { PROJECTS_DATA } from "../data/projectsData";

function Projects() {

  return (
    <div
      id="projects"
      className="bg-black bg-fixed bg-cover"
      style={{ backgroundImage: "url('/projectbg.jpg')" }}
    >

      {PROJECTS_DATA.map((project, index) => (

        <section
          key={index}
          className="sticky top-0 h-screen flex items-center justify-center"
          style={{
            marginTop: index === 0 ? "0px" : "-20vh",
            zIndex: index + 1,
          }}
        >

          <ProjectCard project={project} />

        </section>

      ))}

    </div>
  );
}

export default Projects;
