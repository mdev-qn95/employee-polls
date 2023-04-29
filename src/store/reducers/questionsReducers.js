import {
  ADD_ANSWER,
  ADD_QUESTION,
  GET_QUESTIONS,
} from "../actions/questionsAction";

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
    case ADD_ANSWER:
      return {
        ...state,
        [action.questionId]: {
          ...state[action.questionId],
          [action.option]: {
            ...state[action.questionId][action.option],
            votes: state[action.questionId][action.option].votes.concat(
              action.author
            ),
          },
        },
      };
    default:
      return state;
  }
};
export default questionsReducers;
