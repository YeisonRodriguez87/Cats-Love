import React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <Container>
      <p>
        Hecho con <span>❤️</span> por Yeison Rodríguez{" "}
        {new Date().getFullYear()}
      </p>
    </Container>
  );
}
