// Project files
import Card from "./components/Card";
import projects from "./data/projects.json";
import "./styles/style.css";

export default function App() {
  // Components
  const Projects = projects.map((item) => <Card key={item.id} item={item} />);

  return (
    <div className="App">
      <h1>Portoflio page</h1>

      {/* Project */}
      <section className="projects">
        <h2>Projects</h2>
        <div className="grid">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo nisi
            quo, facere provident deserunt ex quia autem, nam ea iste
            consequuntur similique eum porro ipsam voluptatibus. Similique
            repudiandae provident impedit?
          </p>
          <div className="content">{Projects}</div>
        </div>
      </section>
    </div>
  );
}
