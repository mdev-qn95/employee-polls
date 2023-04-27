import { GET_QUESTIONS } from "../actions/questionsAction";

const questionsReducers = (state = {}, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    default:
      return state;
  }
};
export default questionsReducers;
