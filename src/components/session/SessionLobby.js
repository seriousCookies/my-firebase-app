import React, { useState, useContext, useEffect } from "react";
import { Card } from "react-bootstrap";
import ChatRoom from "../ChatRoom";
import LeaveSession from "./LeaveSession";
import { SessionContext } from "../LobbyPage";
import { auth } from "../../utils/firebase";
import checkOwner from "../../utils/checkOwner";

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
        <Card.Title>
          Hey there! Welcome to {session}
          {owner && (
            <Card.Text className="font-italic">you are the creator</Card.Text>
          )}
        </Card.Title>
        <ChatRoom session={session} />
        <LeaveSession owner={owner} setSession={setSession} />
      </Card.Body>
    </Card>
  );
};

export default SessionLobby;
