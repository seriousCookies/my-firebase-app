import React, { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import leaveSession from "../../utils/leaveSession";
import { SessionContext } from "../LobbyPage";
import { auth } from "../../utils/firebase";

const LeaveSession = () => {
  const { session, setSession } = useContext(SessionContext);
  const leaveRoom = () => {
    leaveSession(session, auth.currentUser);
    setSession();
  };

  return (
    <Container className="d-flex justify-content-end">
      <Button variant="outline-success" onClick={leaveRoom}>
        Leave Session
      </Button>
    </Container>
  );
};

export default LeaveSession;
