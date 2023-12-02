import "./Main.scss";

const Card = ({ title, desc, image, date }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <img src={image} alt={title} />

      <p className="date">{date}</p>
      <p className="desc">{desc}</p>
    </div>
  );
};

export default Card;
