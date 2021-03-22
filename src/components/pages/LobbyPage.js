import React, { useState, createContext } from "react";
import { Container, Jumbotron, Row } from "react-bootstrap";
import { Redirect } from "react-router";
import ChatRoom from "../ChatRoom";
import CreateSession from "../session/CreateSession";
import JoinSession from "../session/JoinSession";
import SessionLobby from "../session/SessionLobby";
import { auth } from "../../utils/firebase";
export const SessionContext = createContext();
const LobbyPage = () => {
  const [session, setSession] = useState();
  if (auth.currentUser) {
    return (
      <SessionContext.Provider value={{ session, setSession }}>
        {!session ? (
          <Jumbotron className="mb-0">
            <ChatRoom />
            <Container className="d-flex justify-content-center">
              <Row>
                <CreateSession />
              </Row>
              <Row>
                <JoinSession />
              </Row>
            </Container>
          </Jumbotron>
        ) : (
          <SessionLobby />
        )}
      </SessionContext.Provider>
    );
  } else {
    return <Redirect to="/signin" />;
  }
};

export default LobbyPage;
