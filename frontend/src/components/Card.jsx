import "./Card.css";
import { useNavigate } from "react-router";

const Card = ({ id, handleOnclick = true, title, seats, booked = 0 }) => {
  const navigate = useNavigate();
  return (
    <div
      className="card"
      onClick={() =>
        handleOnclick
          ? navigate(window.location.pathname + "trainings/" + id)
          : ""
      }
    >
      <h2 className="card-title">{title}</h2>
      <div className="card-subtitle">
        <div className="card-stats">
          <span>Seats - </span>
          <span className="value">{seats}</span>
        </div>
        <div className="card-stats">
          <span>Booked - </span>
          <span className="value">{booked}</span>
        </div>
      </div>
      {handleOnclick && <div className="card-footer">More →</div>}
    </div>
  );
};

export default Card;
