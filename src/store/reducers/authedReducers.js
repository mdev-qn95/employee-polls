import { LOGOUT, SET_AUTHED } from "../actions/authedAction";

const authedReducers = (state = null, action) => {
  switch (action.type) {
    case SET_AUTHED:
      return action.authed;
    case LOGOUT:
      return null;
    default:
      return state;
  }
};

export default authedReducers;
