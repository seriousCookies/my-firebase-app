import React from "react";
import ChatMessage from "./ChatMessage";

const DisplayMessages = ({ messages }) => {
  return messages.map((msg) => <ChatMessage key={msg.id} message={msg} />);
};
export default DisplayMessages;
