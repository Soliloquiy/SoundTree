import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./Navigation.scss";
import Application from "./components/Application";
import Login from "./components/Login";
import Register from "./components/Register";
import Forum from "./components/forum/Forum";
import Profile from "./components/profile/Profile";
import Articles from "./components/Articles";
import LandingPage from "./components/LandingPage";

export default function App() {
  let currentUser;
  let currentId;
  let currentAvatar;
  let button;
  let history = useHistory();

  currentUser = JSON.parse(localStorage.getItem("user"));
  console.log(`current user: ${currentUser}`);
  console.log(`current user typeof: ${typeof currentUser}`);

  if (currentUser) {
    currentId = currentUser["id"];
    currentAvatar = currentUser["avatar"];
  } else {
    currentId = null;
  }

  function logout() {
    localStorage.clear();
    history.push("/");
  }

  if (currentUser) {
    button = (
      <>
      <Nav>
        <Nav.Link href="/profile">Welcome, {currentUser["username"]}</Nav.Link>
        <Nav.Link href="/" onClick={() => logout()}>
          Logout
        </Nav.Link>
        </Nav>
      </>
    );
  } else {
    button = (
      <>
      <Nav>
        <Nav.Link href="/register">Register</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </>
    );
  }

  return (
    <Router>
      <div>
        <Navbar variant="dark" className="navigation-bar" Text style={{ fontFamily: 'test' }} sticky="top">
          <Container>
            <Navbar.Brand href="/">SoundTree</Navbar.Brand>
            <Nav>
              <Nav.Link href="/forum">Forum</Nav.Link>
              <Nav.Link href="/discover">Discover</Nav.Link>
              <Nav.Link href="/articles">Latest News</Nav.Link>
            </Nav>
           
            <Nav>{button}</Nav>
          </Container>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
          <LandingPage />
          </Route>

          <Route exact path="/discover">
          <Application currentUserId={currentId} />
          </Route>


          <Route path="/articles">
            <Articles />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/profile">
            <Profile id={currentId} />
          </Route>

          <Route path="/forum">
            <Forum
              currentUserId={currentId}
              currentUserAvatar={currentAvatar}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
