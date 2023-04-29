export const GET_USERS = "GET_USERS";
export const ADD_USER_QUESTION = "ADD_USER_QUESTION";

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
