// Project files
import TechnologyItem from "components/TechnologyItem";
import technologies from "data/technologies.json";

export default function Technologies() {
  // Components
  const Technologies = technologies.map((item, index) => (
    <TechnologyItem key={index} item={item} />
  ));

  return (
    <section className="technologies section-layout">
      <h2>Technologies</h2>
      <div className="grid">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem nulla
          vero fugiat natus, sapiente culpa corporis voluptatum aperiam
          accusantium sunt ratione, mollitia quam veniam accusamus et placeat
          totam! Officia, eveniet.
        </p>
        <div className="content">{Technologies}</div>
      </div>
    </section>
  );
}
