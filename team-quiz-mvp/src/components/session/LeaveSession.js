import React, { useState, useContext } from "react";
import { Modal, Col, Button, Container } from "react-bootstrap";
import leaveSession from "../../utils/leaveSession";
import { SessionContext } from "../LobbyPage";
import { auth } from "../../utils/firebase";
import { deleteSession } from "../../utils/deleteSession";

const LeaveSession = ({ owner }) => {
  const { session, setSession } = useContext(SessionContext);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const deleteCurrentSession = () => {
    deleteSession(session, auth.currentUser);
    handleClose();
    setSession();
  };

  const leaveRoom = () => {
    if (owner) {
      setShow(true);
    } else {
      leaveSession(session, auth.currentUser);
      setSession();
    }
  };

  return (
    <>
      <Container className="d-flex justify-content-end">
        <Button variant="outline-success" onClick={leaveRoom}>
          Leave Session
        </Button>
      </Container>

      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            You are the session creator- are you sure you want to delete this
            session?
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="outline-success" onClick={handleClose}>
            Go back
          </Button>
          <Button onClick={deleteCurrentSession}>Delete Session</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LeaveSession;
