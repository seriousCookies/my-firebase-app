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
        <Row className="align-items-center d-flex justify-content-center">
          <Col>
            <Form.Group controlId="formUsername">
              <Form.Label>Create a username</Form.Label>
              <Form.Control
                value={username}
                onChange={addUsername}
                placeholder="Enter your username"
              />
            </Form.Group>
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
