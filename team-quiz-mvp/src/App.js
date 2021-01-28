import react, { useState, useEffect } from "react";
import ChatRoom from "./ChatRoom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

function App() {
  const [user] = useAuthState(auth);
  console.log(user && user.uid, "here");
  return (
    <div className="App">
      <header className="App-header">
        {user ? <ChatRoom username={user.displayName} /> : <SignIn />}
      </header>
      <SignOut />
    </div>
  );
}

export default App;
