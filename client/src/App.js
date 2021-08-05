import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import "./Navigation.scss";
import Application from './components/Application';
import Login from "./components/Login";
import Register from './components/Register';
import Form from "./components/forum/Form";
import Board from "./components/forum/Board";

export default function App() {
  let currentUser
  let button;

  currentUser = JSON.parse(localStorage.getItem("user"));
  console.log(`current user: ${currentUser}`)
  console.log(`current user typeof: ${typeof currentUser}`)

  if (currentUser) {
    button = (
      <>
      <Nav.Link href="/profile">Welcome, {currentUser["username"]}</Nav.Link>
      <Nav.Link href="/">Log out</Nav.Link>
      </>
    )
  } else {
    button = (
      <>
      <Nav.Link href="/register">Register</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
      </>
    )
  }

  return (
    <Router>
      <div>
        <Navbar variant="dark" className="navigation-bar">
          <Container>
            <Navbar.Brand href="/">SoundTree</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/forum">Forum</Nav.Link>            
              </Nav>
              <Nav>
                {button}
              </Nav>
          </Container>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Application />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/profile">

          </Route>

          <Route path="/forum">
            <Board />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}