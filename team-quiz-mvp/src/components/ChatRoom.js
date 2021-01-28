import React, { useState, useEffect, useRef } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "./ChatMessage";
import firebase, { auth, firestore } from "../utils/firebase";
import addMessage from "../utils/addMessage";
import startSession from "../utils/startSession";

const ChatRoom = ({ user }) => {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt", "asc").limitToLast(25);

  const [messages] = useCollectionData(query, { idField: "id" });
  const [formValue, setFormValue] = useState("");
  const [sessionID, setSessionID] = useState();

  const scrollToBottom = () => {
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    await addMessage(user, formValue);
    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="chat-bg w-full sm:w-2/3 p-2 rounded">
      <div className="overflow-y-auto h-screen-90">
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </div>

      <form onSubmit={sendMessage} className="pt-3 w-full inline-flex">
        <input
          className="rounded-3xl px-3 w-full py-1 outline-none focus:shadow"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Say something"
        />
        <button
          className={`material-icons p-2 mx-2 bg-white rounded-full transition-all duration-75 ease-in-out text-xl ${
            !formValue || "text-pink-700 hover:text-pink-900"
          }`}
          type="submit"
          disabled={!formValue}
        >
          send
        </button>
      </form>
    </div>
  );
};

export default ChatRoom;
