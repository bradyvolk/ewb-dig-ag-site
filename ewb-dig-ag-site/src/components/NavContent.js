import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import styles from './css/navcontent.module.css';

export default function NavContent() {
  return (
    <div>
      <Navbar className={styles.container} variant="dark">
        <Container>
          <Navbar.Brand href="/">EWB Digital Agriculture</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/NLB">NLB</Nav.Link>
            <Nav.Link href="/Solution">Solution</Nav.Link>
            <Nav.Link href="/Hardware">Hardware</Nav.Link>
            <Nav.Link href="/Software">Software</Nav.Link>
            <Nav.Link href="/Team">Team</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
