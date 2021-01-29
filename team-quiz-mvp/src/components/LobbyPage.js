import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import ChatRoom from "./ChatRoom";
import CreateSession from "./CreateSession";
import JoinSession from "./JoinSession";
import SessionLobby from "./SessionLobby";

const LobbyPage = () => {
  const [session, setSession] = useState();
  return session ? (
    <SessionLobby session={session} setSession={setSession} />
  ) : (
    <Container>
      <ChatRoom />
      <Container className="d-flex justify-content-center">
        <Row>
          <CreateSession session={session} setSession={setSession} />
        </Row>
        <Row>
          <JoinSession session={session} setSession={setSession} />
        </Row>
      </Container>
    </Container>
  );
};

export default LobbyPage;
