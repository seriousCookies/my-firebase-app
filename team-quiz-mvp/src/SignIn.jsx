import React, { useState } from "react";
import { Form, Row, Button, Container } from "react-bootstrap";
import { addUser } from "./utils/addUser";
function SignIn() {
  const [username, setUsername] = useState();
  const newUser = (e) => {
    e.preventDefault();
    addUser(username);
    // auth
    //   .signInAnonymously()
    //   .then(() => {
    //     // Signed in..
    //   })
    //   .catch((err) => {
    //     console.log(err, "error adding user");
    //   });
  };
  const addUsername = (e) => {
    setUsername(e.target.value);
  };
  return (
    <Container className="d-flex justify-content-center">
      <Row className="d-flex justify-content-center">
        <Form onSubmit={newUser}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              value={username}
              onChange={addUsername}
              placeholder="Enter your username"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  );
}

export default SignIn;
