import React, { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import { SessionContext } from "../LobbyPage";

const LeaveSession = () => {
  const { setSession } = useContext(SessionContext);
  const leaveRoom = () => setSession();

  return (
    <Container className="d-flex justify-content-end">
      <Button variant="outline-success" onClick={leaveRoom}>
        Leave Session
      </Button>
    </Container>
  );
};

export default LeaveSession;
