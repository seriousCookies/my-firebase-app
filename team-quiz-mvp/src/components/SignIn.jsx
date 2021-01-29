import React, { useState } from "react";
import { Form, Row, Button, Container, Col } from "react-bootstrap";
import { addUser } from "../utils/addUser";
function SignIn() {
  const [username, setUsername] = useState();
  const newUser = (e) => {
    e.preventDefault();
    addUser(username);
  };
  const addUsername = (e) => {
    setUsername(e.target.value);
  };
  return (
    <Container className="d-flex justify-content-center ">
      <Form onSubmit={newUser}>
        <Form.Label>Enter in a username to get started</Form.Label>
        <Row className="align-items-center d-flex justify-content-center">
          <Col>
            <Form.Control
              value={username}
              onChange={addUsername}
              placeholder="Enter your username"
            />
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default SignIn;
