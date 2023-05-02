export const SET_AUTHED = "SET_AUTHED";
export const LOGOUT = "LOGOUT";

export const handleLogin = (username, password) => {
  return (dispatch, getState) => {
    const { users } = getState();

    const user = Object.values(users).find(
      (user) => user.id === username && user.password === password
    );

    if (user) {
      return dispatch(setAuthedUser(user));
    }
  };
};

export const setAuthedUser = (user) => {
  return {
    type: SET_AUTHED,
    authed: user.id,
  };
};

export const handleLogout = () => {
  return (dispatch) => {
    return dispatch(logoutAuthedUser());
  };
};

export const logoutAuthedUser = () => {
  return {
    type: LOGOUT,
  };
};
