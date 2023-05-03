import { connect } from "react-redux";
import Card from "./Card";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Home = ({ authed, questions }) => {
  return (
    <div className="home" data-testid="home-page">
      <Tabs defaultActiveKey="unAnswered" className="mb-3">
        <Tab eventKey="unAnswered" title="UnAnswered">
          <div className="questions">
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
        </Tab>
        <Tab eventKey="answered" title="Answered">
          <div className="questions">
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
        </Tab>
      </Tabs>
    </div>
  );
};

const mapStateToProps = ({ authed, questions }) => ({
  authed,
  questions: Object.values(questions),
});
export default connect(mapStateToProps)(Home);
