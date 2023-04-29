import {
  ADD_USER_ANSWER,
  ADD_USER_QUESTION,
  GET_USERS,
} from "../actions/usersAction";

const usersReducers = (state = {}, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_USER_QUESTION:
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          questions: state[action.author].questions.concat(action.qid),
        },
      };
    case ADD_USER_ANSWER:
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          answers: {
            ...state[action.author].answers,
            [action.questionId]: action.option,
          },
        },
      };
    default:
      return state;
  }
};

export default usersReducers;
