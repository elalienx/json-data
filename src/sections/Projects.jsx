// Project
import ProjectItem from "../components/ProjectItem";
import projects from "../data/projects.json";

export default function Projects() {
  // Components
  const Projects = projects.map((item) => (
    <ProjectItem key={item.id} item={item} />
  ));

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="grid">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo nisi
          quo, facere provident deserunt ex quia autem, nam ea iste consequuntur
          similique eum porro ipsam voluptatibus. Similique repudiandae
          provident impedit?
        </p>
        <div className="content">{Projects}</div>
      </div>
    </section>
  );
}