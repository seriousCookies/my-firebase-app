import React, { useState } from "react";
import ChatRoom from "./ChatRoom";
import CreateSession from "./CreateSession";
import JoinSession from "./JoinSession";
import SessionLobby from "./SessionLobby";

const LobbyPage = () => {
  const [session, setSession] = useState();
  return session ? (
    <SessionLobby session={session} setSession={setSession} />
  ) : (
    <div>
      <ChatRoom />
      <CreateSession session={session} setSession={setSession} />
      <JoinSession session={session} setSession={setSession} />
    </div>
  );
};

export default LobbyPage;
