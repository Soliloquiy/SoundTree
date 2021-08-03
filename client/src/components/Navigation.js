import React from "react";
import "./Navigation.scss";
import { Container, Navbar, Nav } from 'react-bootstrap';

export default function Navgiation() {

  return (
    <Navbar variant="dark" className="navigation-bar">
      <Container>
        <Navbar.Brand href="/">SoundTree</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/forum">Forum</Nav.Link>            
          </Nav>
          <Nav>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  )
};