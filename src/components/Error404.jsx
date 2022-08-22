import React from "react";
import { Button, Container } from "react-bootstrap";
import styles from "./Error404.module.css";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <>
      <Container fluid className="App-header">
        <h1>ERROR 404</h1>
        <img
          className={styles.img}
          src={require("../images/fondo_Error404.png")}
          alt="Error 404"
        />
        <h2>PÁGINA NO ENCONTRADA</h2>
        <Link to="/home">
          <Button variant="info" className="mt-3">
            Inicio
          </Button>
        </Link>
      </Container>
    </>
  );
}
