import React, { useState } from "react";
import { Button, Modal, Row, Col, Form } from "react-bootstrap";

const JoinSession = ({ session, setSession }) => {
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
      <Button variant="primary" onClick={handleShow}>
        Join a session
      </Button>

      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Join a session</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={joinTheSession} className="pt-3 w-full inline-flex">
            <Row>
              <Col xs={12} md={8}>
                <Form.Control
                  className="rounded-3xl px-3 w-full py-1 outline-none focus:shadow"
                  value={formValue}
                  onChange={(e) => setFormValue(e.target.value)}
                  placeholder="enter in a session ID"
                />
              </Col>
              <Col xs={6} md={4}>
                <Button type="submit" disabled={!formValue}>
                  send
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default JoinSession;
