import React, { useState, useEffect, useContext, useRef } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import addMessage from "../utils/addMessage";
import { auth, firestore } from "../utils/firebase";
import { Card, Form, Button, Row, Col, Container } from "react-bootstrap";
import DisplayMessages from "./DisplayMessages";
import { SessionContext } from "./pages/LobbyPage";

const ChatRoom = () => {
  const { session } = useContext(SessionContext);
  const user = auth.currentUser;
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
        {session ? session + "'s Private Chat" : "Public Chat Room "}
      </Card.Header>
      <Card.Body>
        {messages && <DisplayMessages messages={messages} />}
        <span ref={dummy}></span>
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
      </Card.Body>
    </Card>
  );
};

export default ChatRoom;
