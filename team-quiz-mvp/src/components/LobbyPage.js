import React, { useState, createContext } from "react";
import { Container, Row } from "react-bootstrap";
import ChatRoom from "./ChatRoom";
import CreateSession from "./session/CreateSession";
import JoinSession from "./session/JoinSession";
import SessionLobby from "./session/SessionLobby";
import SessionList from "./SessionList";

export const SessionContext = createContext();
const LobbyPage = () => {
  const [session, setSession] = useState();
  return (
    <SessionContext.Provider value={{ session, setSession }}>
      {session ? (
        <SessionLobby />
      ) : (
        <Container>
          <ChatRoom />
          <Container>
            <SessionList />
          </Container>
          <Container className="d-flex justify-content-center">
            <Row>
              <CreateSession />
            </Row>
            <Row>
              <JoinSession />
            </Row>
          </Container>
        </Container>
      )}
    </SessionContext.Provider>
  );
};

export default LobbyPage;
