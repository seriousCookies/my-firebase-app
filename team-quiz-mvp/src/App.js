import "./styles/custom-theme.scss";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./utils/firebase";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import LobbyPage from "./components/LobbyPage";
import { Container, Jumbotron } from "react-bootstrap";

function App() {
  const [user] = useAuthState(auth);
  return (
    <Container className="vh-100 d-flex flex-column justify-content-center">
      <Jumbotron>
        <header className="App-header">
          {user ? <LobbyPage user={user} /> : <SignIn />}
        </header>
        <SignOut />
      </Jumbotron>
    </Container>
  );
}

export default App;
