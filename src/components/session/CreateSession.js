import React, { useState, useRef, useContext } from "react";
import {
  Button,
  Modal,
  Tooltip,
  Overlay,
  Row,
  Container,
  Form,
} from "react-bootstrap";
import { SessionContext } from "../LobbyPage";
import { auth } from "../../utils/firebase";
import startSession from "../../utils/startSession";
import RangeSlider from "react-bootstrap-range-slider";
const defaultForm = {
  sessionName: "",
  sessionType: "Public",
  maxPlayers: 1,
};

const CreateSession = () => {
  const { setSession } = useContext(SessionContext);
  const [modalShow, setModalShow] = useState(false);
  const [formValue, setFormValue] = useState(defaultForm);
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const showWarning = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 2000);
  };
  const handleClose = () => {
    setModalShow(false);
    setFormValue(defaultForm);
  };
  const handleShow = () => setModalShow(true);
  const createASession = (e) => {
    e.preventDefault();
    if (formValue.sessionName === "") {
      showWarning();
    } else {
      console.log(formValue);
      startSession(auth.currentUser, formValue, setSession);
      handleClose();
    }
  };

  return (
    <>
      <Container className="d-flex justify-content-center">
        <Row className="d-flex justify-content-center">
          <Button variant="primary" onClick={handleShow}>
            Create a session
          </Button>
          <Overlay target={target.current} show={show} placement="bottom">
            {(props) => (
              <Tooltip id="overlay-example" {...props}>
                Oops! Name your session!
              </Tooltip>
            )}
          </Overlay>
        </Row>
      </Container>

      <Modal centered show={modalShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a session</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="d-flex justify-content-center">
            <Form onSubmit={createASession}>
              <Form.Group controlId="form.sessionName">
                <Form.Label>Session Name</Form.Label>
                <Form.Control
                  ref={target}
                  onChange={(e) =>
                    setFormValue({ ...formValue, sessionName: e.target.value })
                  }
                  placeholder="give it a name..."
                />
              </Form.Group>
              <Form.Group controlId="form.sessionType">
                <Form.Label>Session Type</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) =>
                    setFormValue({ ...formValue, sessionType: e.target.value })
                  }
                >
                  <option>Public</option>
                  <option>Private</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Form.Label>Max Players</Form.Label>
                </Row>
                <RangeSlider
                  variant="danger"
                  value={formValue.maxPlayers}
                  min={1}
                  max={20}
                  tooltip="on"
                  onChange={(e) =>
                    setFormValue({ ...formValue, maxPlayers: e.target.value })
                  }
                />
              </Form.Group>
              <Modal.Footer
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button type="submit" disabled={!formValue}>
                  Start Playing!
                </Button>
              </Modal.Footer>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateSession;
