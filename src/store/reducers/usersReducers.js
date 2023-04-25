import { GET_USERS } from "../actions/usersAction";

const usersReducers = (state = {}, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      };
    default:
      return state;
  }
};

export default usersReducers;
