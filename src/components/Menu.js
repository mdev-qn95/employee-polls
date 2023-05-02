import { Row, Col, Nav, Image } from "react-bootstrap";
import login from "../images/login.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleLogout } from "../store/actions/authedAction";

const Menu = ({ dispatch, authedUserId }) => {
  const logout = (e) => {
    e.preventDefault();
    dispatch(handleLogout());
  };
  return (
    <Row className="mt-2 mb-5">
      <Col>
        <Nav defaultActiveKey="/" as="ul" className="justify-content-center">
          <Nav.Item as="li" className="mr-5">
            <Link to="/">Home</Link>
          </Nav.Item>
          <Nav.Item as="li" className="mr-5">
            <Link to="/leaderboard">Leaderboard</Link>
          </Nav.Item>
          <Nav.Item as="li" className="mr-5">
            <Link to="/add">New</Link>
          </Nav.Item>
          <Nav.Item as="li" className="mr-5">
            <Image src={login} width="20px"></Image>
            <span className="ml-10" data-testid="user-id">
              {authedUserId}
            </span>
          </Nav.Item>
          <Nav.Item
            as="li"
            className="mr-5"
            style={{ cursor: "pointer" }}
            onClick={logout}
          >
            Logout
          </Nav.Item>
        </Nav>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ authed }) => ({
  authedUserId: authed,
});

export default connect(mapStateToProps)(Menu);
