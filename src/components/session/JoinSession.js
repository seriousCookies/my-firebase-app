import React, { useState, useContext } from "react";
import {
  Alert,
  Button,
  Modal,
  Row,
  Container,
  Col,
  Form,
} from "react-bootstrap";
import addMember from "../../utils/addMember";
import { SessionContext } from "../pages/LobbyPage";
import { auth } from "../../utils/firebase";
import validateSessionID from "../../utils/validateSessionID";

const JoinSession = () => {
  const { setSession } = useContext(SessionContext);
  const [show, setShow] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [formValue, setFormValue] = useState("");

  const user = auth.currentUser;

  const handleClose = () => {
    setShow(false);
    setFormValue("");
  };
  const handleShow = () => setShow(true);
  const joinTheSession = async (e) => {
    e.preventDefault();
    const result = await validateSessionID(formValue);
    if (result) {
      addMember(formValue, user);
      setSession(formValue);
      handleClose();
    }
    setFormValue("");
    setShowWarning(true);
    setTimeout(() => {
      setShowWarning(false);
    }, 2000);
  };

  return (
    <>
      <Container className="d-flex justify-content-center">
        <Row className="d-flex justify-content-center">
          <Button variant="primary" onClick={handleShow}>
            Join a session
          </Button>
        </Row>
      </Container>

      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Join a session</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {showWarning && (
            <Alert
              variant="secondary"
              onClose={() => setShowWarning(false)}
              dismissible
            >
              Whoops! That session doesn't exist
            </Alert>
          )}
          <Container className="d-flex justify-content-center">
            <Form onSubmit={joinTheSession}>
              <Row className="align-items-center d-flex justify-content-center">
                <Col>
                  <Form.Control
                    value={formValue}
                    onChange={(e) => setFormValue(e.target.value)}
                    placeholder="enter in a session ID"
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
        </Modal.Body>
      </Modal>
    </>
  );
};

export default JoinSession;
