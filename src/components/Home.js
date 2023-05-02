import { connect } from "react-redux";
import Card from "./Card";

const Home = ({ authed, questions }) => {
  return (
    <div className="home" data-testid="home-page">
      <div className="questions">
        <div className="title">New Question</div>
        <div className="list-card">
          {questions
            .filter(
              (question) =>
                !question.optionOne.votes.includes(authed) &&
                !question.optionTwo.votes.includes(authed)
            )
            .map((question) => (
              <Card key={question.id} question={question}></Card>
            ))}
        </div>
      </div>
      <div className="questions">
        <div className="title">Done</div>
        <div className="list-card">
          {questions
            .filter(
              (question) =>
                question.optionOne.votes.includes(authed) ||
                question.optionTwo.votes.includes(authed)
            )
            .map((question) => (
              <Card key={question.id} question={question}></Card>
            ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authed, questions }) => ({
  authed,
  questions: Object.values(questions),
});
export default connect(mapStateToProps)(Home);
