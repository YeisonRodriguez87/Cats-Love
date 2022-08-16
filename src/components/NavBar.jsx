import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand>
            <img
              className={styles.imgLogo}
              src={require("../images/fondo_Landing.png")}
              alt="Logo"
              srcset=""
            />
            Cats Love
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Inicio</Nav.Link>
              <Nav.Link href="/nosotros">Nosotros</Nav.Link>
              <Nav.Link href="/cat">Publicar</Nav.Link>
              <Nav.Link href="/" className="bg-danger rounded">
                Salir
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
