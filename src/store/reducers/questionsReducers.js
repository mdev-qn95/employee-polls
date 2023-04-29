import { ADD_QUESTION, GET_QUESTIONS } from "../actions/questionsAction";

const questionsReducers = (state = {}, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    default:
      return state;
  }
};
export default questionsReducers;
