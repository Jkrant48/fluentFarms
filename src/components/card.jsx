//this is a simple card component

function Card({ tile, description, image }) {
  return (
    <div className="card">
      <h3>{tile}</h3>

      <img src={image} alt={tile} />
      <p>{description}</p>
    </div>
  );
}

export default Card;
