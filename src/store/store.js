import { configureStore } from "@reduxjs/toolkit";
import authed from "./reducers/authedReducers";
import users from "./reducers/usersReducers";

export const store = configureStore({
  reducer: {
    authed,
    users,
  },
});
