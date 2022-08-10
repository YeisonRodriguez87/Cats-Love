import React from "react";
import { Nav, Container } from "react-bootstrap";

export default function NavBar() {
  return (
    <Container fluid>
      <Nav className="justify-content-end">
        <Nav.Item>
          <Nav.Link href="/home">Inicio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/nosotros">Nosotros</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/publica">Publica</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
}
