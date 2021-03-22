import React, { useState } from "react";
import { Form, Row, Button, Container, Col, Jumbotron } from "react-bootstrap";
import { Redirect } from "react-router";
import { addUser } from "../../utils/addUser";
import { auth } from "../../utils/firebase";
const SignIn = () => {
  const [username, setUsername] = useState();
  const newUser = (e) => {
    e.preventDefault();
    addUser(username);
  };
  const addUsername = (e) => {
    setUsername(e.target.value);
  };
  if (auth.currentUser) {
    return <Redirect to="/home" />;
  } else {
    return (
      <Container className="vh-100 d-flex flex-column justify-content-center">
        <Jumbotron className="mb-0">
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
        </Jumbotron>
      </Container>
    );
  }
};
export default SignIn;
