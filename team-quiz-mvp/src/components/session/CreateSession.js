import React, { useContext } from "react";
import { Row, Button, Container } from "react-bootstrap";
import startSession from "../../utils/startSession";
import { auth } from "../../utils/firebase";
import { SessionContext } from "../LobbyPage";

const CreateSession = () => {
  const { session, setSession } = useContext(SessionContext);
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
