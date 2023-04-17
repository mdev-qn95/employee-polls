import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import New from "./components/New";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Login from "./components/Login";
import Leaderboard from "./components/Leaderboard";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/leaderboard" exact element={<Leaderboard />} />
          <Route path="/new" exact element={<New />} />
          <Route path="/404" exact element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
