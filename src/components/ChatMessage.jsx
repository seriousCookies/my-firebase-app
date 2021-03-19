import React from "react";

const ChatMessage = (props) => {
  const { user, body, uid, photoURL, createdAt } = props.message;
  console.log(uid, photoURL, createdAt, "get rid of warnings");
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
