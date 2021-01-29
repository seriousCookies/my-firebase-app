import React from "react";
import ChatRoom from "./ChatRoom";
import LeaveSession from "./LeaveSession";

const SessionLobby = ({ session, setSession }) => {
  return (
    <div>
      Hey there!
      <ChatRoom session={session} />
      <LeaveSession setSession={setSession} />
    </div>
  );
};

export default SessionLobby;
