import React, { useState, useEffect, useRef } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "./ChatMessage";
import firebase, { auth, firestore } from "../utils/firebase";
import addMessage from "../utils/addMessage";
import startSession from "../utils/startSession";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
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
    <Card border="dark" style={{ width: "18rem" }}>
      <Card.Header>Chat Room</Card.Header>
      <Card.Body>
        <Card.Text>
          {messages &&
            messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
          <span ref={dummy}></span>
        </Card.Text>
        <Card.Text>
          <Form onSubmit={sendMessage} className="pt-3 w-full inline-flex">
            <Row>
              <Col xs={12} md={8}>
                <Form.Control
                  className="rounded-3xl px-3 w-full py-1 outline-none focus:shadow"
                  value={formValue}
                  onChange={(e) => setFormValue(e.target.value)}
                  placeholder="Say something"
                />
              </Col>
              <Col xs={6} md={4}>
                <Button type="submit" disabled={!formValue}>
                  send
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ChatRoom;
