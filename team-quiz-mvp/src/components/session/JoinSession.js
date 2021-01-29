import React, { useState, useContext } from "react";
import { Button, Modal, Row, Container, Col, Form } from "react-bootstrap";
import { SessionContext } from "../LobbyPage";

const JoinSession = () => {
  const { session, setSession } = useContext(SessionContext);
  const [show, setShow] = useState(false);
  const [formValue, setFormValue] = useState("");

  const handleClose = () => {
    setShow(false);
    setFormValue("");
  };
  const handleShow = () => setShow(true);
  const joinTheSession = (e) => {
    e.preventDefault();
    setSession(formValue);
    handleClose();
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
