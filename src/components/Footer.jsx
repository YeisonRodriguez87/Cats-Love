import React from "react";
import { Container } from "react-bootstrap";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <Container fluid className={styles.footer}>
      <p>
        Hecho con <span>❤️</span> por Yeison Rodríguez{" "}
        {new Date().getFullYear()}
      </p>
    </Container>
  );
}
