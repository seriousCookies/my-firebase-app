import React from "react";

const ChatMessage = (props) => {
  const { user, body, uid, photoURL, createdAt } = props.message;

  return (
    <>
      <div>
        <p>
          {user}: {body}
        </p>
      </div>
    </>
  );
};

export default ChatMessage;
