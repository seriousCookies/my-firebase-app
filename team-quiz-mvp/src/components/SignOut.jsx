import React from "react";
import { Button, Container } from "react-bootstrap";
import deleteUser from "../utils/deleteUser";
import { auth } from "../utils/firebase";

const SignOut = () => {
  const user = auth.currentUser;
  const removeUser = () => deleteUser(user);

  return (
    auth.currentUser && (
      <Container className="d-flex justify-content-end">
        <Button variant="outline-success" onClick={removeUser}>
          Sign Out
        </Button>
      </Container>
    )
  );
};

export default SignOut;
