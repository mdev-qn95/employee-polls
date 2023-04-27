import { getUserInformation } from "../../util/api";
import { getQuestions } from "../actions/questionsAction";
import { getUser } from "../actions/usersAction";

export function getDataInit() {
  return (dispatch) => {
    return getUserInformation().then(({ users, questions }) => {
      dispatch(getUser(users));
      dispatch(getQuestions(questions));
    });
  };
}
