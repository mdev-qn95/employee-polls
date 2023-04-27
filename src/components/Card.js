import { Link } from "react-router-dom";
const Card = ({ question }) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedDate = date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    return `${formattedHours}:${formattedMinutes}${ampm} | ${formattedDate}`;
  };

  return (
    <div className="list-card">
      <div className="card-el">
        <div className="user-time">
          <span className="user">{question.author}</span>
          <span className="time">{formatDate(question.timestamp)}</span>
        </div>
        <div className="show">
          <Link to={"questions/" + question.id}>
            <button>Show</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
