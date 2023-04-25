export const GET_USERS = "GET_USERS";

export const getUser = (users) => {
  return {
    type: GET_USERS,
    users,
  };
};
