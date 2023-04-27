import { configureStore } from "@reduxjs/toolkit";
import authed from "./reducers/authedReducers";
import users from "./reducers/usersReducers";
import questions from "./reducers/questionsReducers";

export const store = configureStore({
  reducer: {
    authed,
    users,
    questions,
  },
});
