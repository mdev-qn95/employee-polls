import React from "react";
import { connect } from "react-redux";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import login from "../images/login.png";
import { handleLogin } from "../store/actions/authedAction";

const Login = ({ dispatch, loggedIn }) => {
  const [user, setUser] = useState("johndoe");
  const [password, setPassword] = useState("johndoe");

  if (loggedIn) {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectUrl = urlParams.get("redirectTo");
    return <Navigate to={redirectUrl ? redirectUrl : "/"} />;
  }

  const userOnChangeHandle = (e) => {
    const value = e.target.value;
    setUser(value);
  };

  const passwordOnChangeHandle = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleLogin(user, password));
    setUser("");
    setPassword("");
  };
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2>Employee Polls</h2>
          <Image src={login} width="400px" alt="Login" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Log In</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="user" className="mt-2">
              <Form.Label>User</Form.Label>
              <Form.Control
                type="text"
                name="user"
                placeholder="User"
                value={user}
                onChange={userOnChangeHandle}
              />
            </Form.Group>

            <Form.Group controlId="password" className="mt-2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={passwordOnChangeHandle}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-5">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = ({ authed }) => ({
  loggedIn: authed,
});

export default connect(mapStateToProps)(Login);
