import "./styles/custom-theme.scss";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./utils/firebase";
import SignIn from "./components/pages/SignIn";
import SignOut from "./components/SignOut";
import LobbyPage from "./components/pages/LobbyPage";
import { Card } from "react-bootstrap";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import CreateQuiz from "./components/pages/CreateQuiz";

function App() {
  const [user] = useAuthState(auth);
  return (
    <Card className="vh-100 d-flex flex-column justify-content-center">
      <Card.Header className="text-center">
        <Card.Title>Welcome to Quizzle!</Card.Title>
      </Card.Header>
      <Router>
        <Switch>
          <Route path="/" exact>
            {user ? (
              <Redirect to="/LobbyPage" auth={auth} />
            ) : (
              <SignIn auth={auth} />
            )}
          </Route>
          <Route path="/signin" component={SignIn} />
          <Route path="/LobbyPage" component={LobbyPage} />
          <Route path="/createQuiz" component={CreateQuiz} />
        </Switch>
      </Router>
      <Card.Footer>
        <SignOut />
      </Card.Footer>
    </Card>
  );
}

export default App;
