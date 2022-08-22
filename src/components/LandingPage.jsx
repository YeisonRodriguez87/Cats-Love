import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <>
      <Container fluid className="App-header">
        <Row>
          <Col className="col-lg-6 col-12 mt-5 mt-lg-0 mb-5">
            <img
              className={styles.imgLanding}
              src={require("../images/fondo_Landing.png")}
              alt="foto-landing"
            />
          </Col>
          <Col className="col-lg-6 col-12 mt-lg-5 mt-1 mb-lg-0 mb-4">
            <h1>😻¡Bienvenid@ a Cats Love!</h1>
            <p className="text-center mt-5 mb-4">
              ❤️Un lugar en donde vas a encontrar al amor de tu vida❤️​
            </p>
            <p>
              Aquí vas a poder encontrar michis que han sido abandonados y/o
              maltratados, que buscan que tu les puedas dar una segunda
              oportunidad de vida. Te vas a poder contactar directamente con la
              persona que encontró al michi para que así puedas llevarl@ a
              casa...
            </p>
            <p>¿Qué esperas?</p>
            <Link to="/home">
              <Button variant="success">Ingresar</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}
