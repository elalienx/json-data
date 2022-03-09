// Project files
import Card from "./components/Card";
import projects from "./data/projects.json";
import "./styles/style.css";

export default function App() {
  // Components
  const Projects = projects.map((item) => <Card key={item.id} item={item} />);

  return (
    <div className="App">
      <h1>Hello world</h1>
      {Projects}
    </div>
  );
}
