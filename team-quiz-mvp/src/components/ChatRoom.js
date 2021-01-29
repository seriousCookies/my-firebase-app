import React, { useState, useEffect, useRef } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "./ChatMessage";
import firebase, { auth, firestore } from "../utils/firebase";
import addMessage from "../utils/addMessage";
import { Card, Form, Button, Row, Col, Container } from "react-bootstrap";
import DisplayMessages from "./DisplayMessages";
const ChatRoom = ({ session }) => {
  const user = auth.currentUser;
  console.log(session, "here n");
  const dummy = useRef();
  const messagesRef = session
    ? firestore.collection("Sessions").doc(session).collection("messages")
    : firestore.collection("messages");

  const query = messagesRef.orderBy("createdAt", "asc").limitToLast(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const scrollToBottom = () => {
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    await addMessage(session, user, formValue);
    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Card border="primary" style={{ width: "18rem" }}>
      <Card.Header>
        {session ? "Private chat:" + session : "Public "}Chat Room
      </Card.Header>
      <Card.Body>
        <Card.Text>
          {messages && <DisplayMessages messages={messages} />}
          <span ref={dummy}></span>
        </Card.Text>
        <Card.Text>
          <Container className="d-flex justify-content-center ">
            <Form onSubmit={sendMessage}>
              <Row className="align-items-center d-flex justify-content-center">
                <Col>
                  <Form.Control
                    value={formValue}
                    onChange={(e) => setFormValue(e.target.value)}
                    placeholder="Say something"
                  />
                </Col>
                <Col>
                  <Button type="submit" disabled={!formValue}>
                    send
                  </Button>
                </Col>
              </Row>
            </Form>
          </Container>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ChatRoom;
