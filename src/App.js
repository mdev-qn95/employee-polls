import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import New from "./components/New";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Login from "./components/Login";
import Leaderboard from "./components/Leaderboard";
import PageNotFound from "./components/PageNotFound";
import ProtectedRoute from "./util/ProtectedRoute";
import { getDataInit } from "./store/shared/init";
import Detail from "./components/Detail";

const App = ({ dispatch, loggedIn }) => {
  useEffect(() => {
    dispatch(getDataInit());
  });
  return (
    <div className="App">
      {loggedIn && <Menu></Menu>}
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" exact element={<Login />} />
        <Route
          path="/leaderboard"
          exact
          element={
            <ProtectedRoute>
              <Leaderboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/questions/:id"
          exact
          element={
            <ProtectedRoute>
              <Detail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add"
          exact
          element={
            <ProtectedRoute>
              <New />
            </ProtectedRoute>
          }
        />
        <Route path="/404" exact element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

const mapStateToProps = ({ authed }) => ({
  loggedIn: authed,
});

export default connect(mapStateToProps)(App);
