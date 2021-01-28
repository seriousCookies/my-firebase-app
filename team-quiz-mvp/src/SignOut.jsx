import React from "react";
import deleteUser from "./utils/deleteUser";
import { auth } from "./firebase";

const SignOut = () => {
  const user = auth.currentUser;
  const removeUser = () => deleteUser(user);

  return (
    auth.currentUser && (
      <div>
        <button onClick={removeUser}>Sign Out</button>
      </div>
    )
  );
};

export default SignOut;
