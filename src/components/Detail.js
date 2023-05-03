import { connect } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import userImg from "../images/user.jpg";
import { voteOption } from "../store/actions/questionsAction";

const Detail = ({ authed, question, user, dispatch }) => {
  const navigate = useNavigate();

  if (!authed || !question || !user) {
    return <Navigate to="/404" />;
  }

  const votedOptionOne = question.optionOne.votes.includes(authed);
  const votedOptionTwo = question.optionTwo.votes.includes(authed);
  const voted = votedOptionOne || votedOptionTwo;

  const calcPercent = (question, option) => {
    const total =
      question.optionOne.votes.length + question.optionTwo.votes.length;
    switch (option) {
      case 1:
        return (question.optionOne.votes.length / total) * 100 + "%";
      case 2:
        return (question.optionTwo.votes.length / total) * 100 + "%";
      default:
        return "0%";
    }
  };

  const voteOptionHandle = (option) => {
    dispatch(voteOption(question.id, option));
    navigate("/");
  };

  return (
    <div className="detail">
      <div className="poll-by">
        <span>Poll by {user.id}</span>
        <img src={userImg} alt="" width="300px"></img>
        <span>Would You Rather</span>
      </div>
      <div className="options">
        <div className="option">
          <div className="text">{question.optionOne.text}</div>
          <div
            className={
              votedOptionOne ? "button-votes selected" : "button-votes"
            }
          >
            {voted ? (
              <span>
                Votes: {question.optionOne.votes.length} (
                {calcPercent(question, 1)})
              </span>
            ) : (
              <button
                disabled={voted}
                onClick={() => voteOptionHandle("optionOne")}
              >
                Click
              </button>
            )}
          </div>
        </div>
        <div className="option">
          <div className="text">{question.optionTwo.text}</div>
          <div
            className={
              votedOptionTwo ? "button-votes selected" : "button-votes"
            }
          >
            {voted ? (
              <span>
                Votes: {question.optionTwo.votes.length} (
                {calcPercent(question, 2)})
              </span>
            ) : (
              <button
                disabled={voted}
                onClick={() => voteOptionHandle("optionTwo")}
              >
                Click
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authed, questions, users }) => {
  try {
    const question = Object.values(questions).find(
      (question) => question.id === useParams().id
    );
    const user = Object.values(users).find(
      (user) => user.id === question.author
    );
    return { authed, question, user };
  } catch (e) {
    return <Navigate to="/404" />;
  }
};
export default connect(mapStateToProps)(Detail);
