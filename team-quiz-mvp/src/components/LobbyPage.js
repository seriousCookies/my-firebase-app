import React, { useState } from "react";
import ChatRoom from "./ChatRoom";
import CreateSession from "./CreateSession";
import JoinSession from "./JoinSession";

const LobbyPage = () => {
  const [session, setSession] = useState();
  return (
    <div>
      {session && session}
      <ChatRoom session={session} />
      <CreateSession session={session} setSession={setSession} />
      <JoinSession session={session} setSession={setSession} />
    </div>
  );
};

export default LobbyPage;
