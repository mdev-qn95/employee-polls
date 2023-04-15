import { Row, Col, Nav, Button, Image } from "react-bootstrap";
import login from "../images/login.png";

const Header = () => {
  return (
    <Row className="mt-2">
      <Col>
        <Nav defaultActiveKey="/" as="ul" className="justify-content-center">
          <Nav.Item as="li">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/new">New</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link disabled>
              <Image src={login} width="20px"></Image> MDev
            </Nav.Link>
          </Nav.Item>
          <Button variant="light">Logout</Button>
        </Nav>
      </Col>
    </Row>
  );
};

export default Header;
