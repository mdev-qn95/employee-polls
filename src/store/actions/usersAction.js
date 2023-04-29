export const GET_USERS = "GET_USERS";
export const ADD_USER_QUESTION = "ADD_USER_QUESTION";
export const ADD_USER_ANSWER = "ADD_USER_ANSWER";

export const getUser = (users) => {
  return {
    type: GET_USERS,
    users,
  };
};

export const addUserQuestion = ({ author, id }) => {
  return {
    type: ADD_USER_QUESTION,
    author,
    qid: id,
  };
};

export const addUserAnswer = (author, questionId, option) => {
  return {
    type: ADD_USER_ANSWER,
    author,
    questionId,
    option,
  };
};
