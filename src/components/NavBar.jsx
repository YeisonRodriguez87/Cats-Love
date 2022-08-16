import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="sticky-top"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="/home">
            <img
              className={styles.imgLogo}
              src={require("../images/fondo_Landing.png")}
              alt="Logo"
            />
            Cats Love
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav className="justify-content-end">
              <Nav.Link href="/home">Inicio</Nav.Link>
              <Nav.Link href="/nosotros">Nosotros</Nav.Link>
              <Nav.Link href="/cat">Publicar</Nav.Link>
              <Navbar.Text>
                <a href="/">Salir</a>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
