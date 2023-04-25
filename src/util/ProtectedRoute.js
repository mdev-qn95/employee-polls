import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = ({ children, loggedIn }) => {
  const redirectUrl = window.location.href
    .toString()
    .split(window.location.host)[1];

  return loggedIn ? (
    children
  ) : (
    <Navigate
      to={redirectUrl !== "/" ? `/login?redirectTo=${redirectUrl}` : "/login"}
    />
  );
};

const mapStateToProps = ({ authed }) => ({
  loggedIn: authed,
});

export default connect(mapStateToProps)(ProtectedRoute);
