//this is a simple card component

function Card(props) {
  return (
    <div className="card">
      <h3>{props.title}</h3>

      <img src={props.image} alt={props.title} />
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
