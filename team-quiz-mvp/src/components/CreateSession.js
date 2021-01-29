import React from "react";
import { Form, Row, Button, Container } from "react-bootstrap";
import startSession from "../utils/startSession";
import { auth } from "../utils/firebase";

const CreateSession = ({ session, setSession }) => {
  const user = auth.currentUser;

  const createNewSession = (e) => {
    e.preventDefault();
    console.log(session, "here now");
    startSession(user, setSession);
  };

  return (
    <Container className="d-flex justify-content-center">
      <Row className="d-flex justify-content-center">
        <Button variant="primary" onClick={createNewSession}>
          Create a Session
        </Button>
      </Row>
    </Container>
  );
};

export default CreateSession;
