export default function TechnologyItem({ item }) {
  const { name, imageURL } = item;

  return (
    <div className="technolgy-item">
      <img src={imageURL} alt={`${name} logo`} />
      <span className="title">{name}</span>
    </div>
  );
}
