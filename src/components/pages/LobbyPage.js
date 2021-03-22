import React, { useState, createContext, useEffect } from "react";
import { Container, Jumbotron, Row } from "react-bootstrap";
import { Redirect, useRouteMatch } from "react-router-dom";
import ChatRoom from "../ChatRoom";
import CreateSession from "../session/CreateSession";
import JoinSession from "../session/JoinSession";
import SessionLobby from "../session/SessionLobby";
import { auth } from "../../utils/firebase";
export const SessionContext = createContext();
const LobbyPage = () => {
  const { url } = useRouteMatch();
  const [session, setSession] = useState(
    localStorage.getItem("my-current-session") || null
  );

  useEffect(() => {
    const sessionData = localStorage.getItem("my-current-session");
    sessionData && setSession(sessionData);
  }, []);

  useEffect(() => {
    localStorage.setItem("my-current-session", session);
  });

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
