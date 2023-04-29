import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPoll } from "../store/actions/questionsAction";

const New = ({ dispatch }) => {
  const [firstVal, setFirstVal] = useState("");
  const [secondVal, setSecondVal] = useState("");
  const navigate = useNavigate();

  const firstOptionChangeHandle = (e) => {
    const value = e.target.value;
    setFirstVal(value);
  };

  const secondOptionChangeHandle = (e) => {
    const value = e.target.value;
    setSecondVal(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPoll(firstVal, secondVal));
    navigate("/");
  };

  return (
    <Container className="mt-5 new">
      <Row>
        <Col>
          <h2>Would You Rather</h2>
          <span className="gray">Create Your Own Poll</span>
          <Form onSubmit={handleSubmit} className="mt-5">
            <Form.Group controlId="user">
              <Form.Label className="bold">First Option</Form.Label>
              <Form.Control
                type="text"
                name="one"
                placeholder="Option One"
                value={firstVal}
                onChange={firstOptionChangeHandle}
              />
            </Form.Group>

            <Form.Group controlId="password" className="mt-5">
              <Form.Label className="bold">Second Option</Form.Label>
              <Form.Control
                type="text"
                name="two"
                placeholder="Option Two"
                value={secondVal}
                onChange={secondOptionChangeHandle}
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

export default connect()(New);
