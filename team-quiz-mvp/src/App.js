import react, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./utils/firebase";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import LobbyPage from "./components/LobbyPage";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header className="App-header">
        {user ? <LobbyPage user={user} /> : <SignIn />}
      </header>
      <SignOut />
    </div>
  );
}

export default App;
