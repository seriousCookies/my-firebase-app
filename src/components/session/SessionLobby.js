import React, { useState, useContext, useEffect } from "react";
import { Card, Row, Container, Button } from "react-bootstrap";
import ChatRoom from "../ChatRoom";
import LeaveSession from "./LeaveSession";
import { SessionContext } from "../pages/LobbyPage";
import { auth } from "../../utils/firebase";
import checkOwner from "../../utils/checkOwner";
import { Link } from "react-router-dom";

const SessionLobby = () => {
  const { session, setSession } = useContext(SessionContext);
  const [owner, setOwner] = useState(false);
  const user = auth.currentUser;

  useEffect(() => {
    checkOwner(user.uid, session, setOwner);
  }, [session, user.uid]);
  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-center">
          Hey there! Welcome to {session}
          {owner && (
            <Card.Text className="font-italic">you are the creator</Card.Text>
          )}
        </Card.Title>
        <Container>
          <Row>
            <ChatRoom session={session} />
          </Row>
          <Row>
            <Link to="/CreateQuiz">
              <Button variant="secondary">Create a Quiz</Button>
            </Link>
          </Row>
        </Container>
        <LeaveSession owner={owner} setSession={setSession} />
      </Card.Body>
    </Card>
  );
};

export default SessionLobby;
