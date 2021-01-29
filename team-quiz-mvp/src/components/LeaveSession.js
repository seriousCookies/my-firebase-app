import React from "react";

const LeaveSession = ({ setSession }) => {
  const leaveRoom = () => setSession();

  return (
    <div>
      <button onClick={leaveRoom}>Leave Session</button>
    </div>
  );
};

export default LeaveSession;
