import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "./NavBar";
import styles from "./Error404.module.css";

export default function Error404() {
  return (
    <>
      <NavBar />
      <Container fluid className="App-header">
        <img
          className={styles.img}
          src={require("../images/fondo_Error404.png")}
          alt="Error 404"
        />
        <h1>ERROR 404 PAGINA NO ENCONTRADA</h1>
      </Container>
    </>
  );
}
