export default function ProjectItem({ item }) {
  const { title, imageURL, message, active } = item;

  // Properties
  const image = require(`../assets/images/${imageURL}`);

  return (
    <button
      className="project-item"
      onClick={() => alert(message)}
      disabled={!active}
    >
      <header className="header">
        {!active && <span className="comming-soon">Comming soon</span>}
        <img className="thumbnail" src={image} alt={title} />
      </header>
      <span className="title">{title}</span>
    </button>
  );
}
