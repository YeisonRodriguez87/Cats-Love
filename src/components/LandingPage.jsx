import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <Container fluid className="App-header">
        <h1>😻¡Bienvenid@ a Cats Love!</h1>
        <p className="text-center mt-4 mb-4">
          ❤️Un lugar en donde vas a encontrar al amor de tu vida❤️​
        </p>
        <Link to="/home">
          <Button variant="success">Ingresar</Button>
        </Link>
      </Container>
    </>
  );
}
