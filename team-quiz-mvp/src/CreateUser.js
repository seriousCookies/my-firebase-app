import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const CreateUser = () => {
  const [newUsername, setNewUsername] = useState("");
  const createNewUser = (e) => {
    e.preventDefault();
    console.log(newUsername);
  };
  const newUserNameSetter = (e) => {
    setNewUsername(e.target.value);
  };
  return (
    <div>
      <Form onSubmit={createNewUser}>
        <Form.Group controlId="FormBasicUser">
          <Form.Control
            onChange={newUserNameSetter}
            value={newUsername}
            placeholder="Enter a username"
          />
        </Form.Group>
        <Button variant="primary" onClick={createNewUser} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreateUser;
