import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import ChatRoom from "../ChatRoom";
import LeaveSession from "./LeaveSession";
import { SessionContext } from "../LobbyPage";

const SessionLobby = () => {
  const { session, setSession } = useContext(SessionContext);
  return (
    <Card>
      <Card.Body>
        <Card.Title>Hey there! Welcome to {session}</Card.Title>
        <ChatRoom session={session} />
        <LeaveSession setSession={setSession} />
      </Card.Body>
    </Card>
  );
};

export default SessionLobby;
