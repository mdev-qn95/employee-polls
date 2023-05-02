import { configureStore } from "@reduxjs/toolkit";
import users from "./reducers/usersReducers";
import authed from "./reducers/authedReducers";
import questions from "./reducers/questionsReducers";

export const store = configureStore({
  reducer: {
    authed,
    users,
    questions,
  },
});
