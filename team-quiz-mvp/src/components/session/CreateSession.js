import React, { useState, useContext } from "react";
import { Button, Modal, Row, Container, Col, Form } from "react-bootstrap";
import addMember from "../../utils/addMember";
import { SessionContext } from "../LobbyPage";
import { auth } from "../../utils/firebase";

const CreateSession = () => {
  const { setSession } = useContext(SessionContext);
  const [show, setShow] = useState(false);
  const [formValue, setFormValue] = useState("");

  const user = auth.currentUser;

  const handleClose = () => {
    setShow(false);
    setFormValue("");
  };
  const handleShow = () => setShow(true);
  const createASession = (e) => {
    e.preventDefault();
    addMember(formValue, user);
    setSession(formValue);
    handleClose();
  };

  return (
    <>
      <Container className="d-flex justify-content-center">
        <Row className="d-flex justify-content-center">
          <Button variant="primary" onClick={handleShow}>
            Create a session
          </Button>
        </Row>
      </Container>

      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a session</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="d-flex justify-content-center">
            <Form onSubmit={createASession}>
              <Row className="align-items-center d-flex">
                <Col>
                  <Form.Control
                    md="auto"
                    value={formValue}
                    onChange={(e) => setFormValue(e.target.value)}
                    placeholder="give it a name..."
                  />
                </Col>
                <Col>
                  <Button type="submit" disabled={!formValue}>
                    create!
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

export default CreateSession;
