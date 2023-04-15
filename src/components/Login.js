import React from "react";
import { useState } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import login from "../images/login.png";

const Login = () => {
  const [user, setUser] = useState("zoshikanlu");
  const [password, setPassword] = useState("pass246");

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
    setUser("");
    setPassword("");
  };
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Image src={login} width="400px" alt="Login" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Log In</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="user">
              <Form.Label>User</Form.Label>
              <Form.Control
                type="text"
                name="user"
                placeholder="User"
                value={user}
                onChange={userOnChangeHandle}
              />
            </Form.Group>

            <Form.Group controlId="password">
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

export default Login;
