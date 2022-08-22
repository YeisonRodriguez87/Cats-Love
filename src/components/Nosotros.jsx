import React, { useState } from "react";
import NavBar from "./NavBar";
import Loading from "./Loading";
//import Footer from "./Footer";
import { Carousel, Col, Container, Row } from "react-bootstrap";

export default function Nosotros() {
  const [loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
  }, 2000);
  return (
    <>
      <NavBar />
      {loader ? (
        <Loading />
      ) : (
        <Container fluid className="App-header">
          <Row>
            <Col className="col-lg-6 col-12 mt-3 mb-4">
              <h1 className="mt-2">Nosotros</h1>
              <p className="m-4">
                Somos una pareja que reside en la ciudad de Buenos Aires
                apasionada por los michis y por los animales en sí, nos gusta
                cuidarlos, mimarlos y darles mucho amor. En el año 2020,
                nos decidimos a adoptar a nuestro primer gatito y al día de hoy
                ya son cuatro michis los que nos acompañan día a día en nuestro
                hogar, Dante, Gio, Mateo y Gucci. Ellos nos han enseñado lo que
                es verdaderamente el amor por los animalitos, lo mal que la
                pueden pasar si no se les brinda un hogar y los peligros a los
                que se someten a diario en las calles o en sitios donde
                solamente son maltratados. Por eso tuvimos esta iniciativa de
                crear un nexo entre las personas que tienen algun michi en
                situación de abandono o que hayan encontrado y quieran buscarle
                una familia y esas personas que quieren darle esa oportunidad de una nueva y mejor
                vida, la cual todos los michis merecen.
                <p></p>
              </p>
            </Col>
            <Col className="mt-3">
              <Carousel fade>
                <Carousel.Item>
                  <img
                    className="d-block w-100 rounded-3"
                    src={require("../images/carrusel_1.jpeg")}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 rounded-3"
                    src={require("../images/carrusel_2.jpeg")}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 rounded-3"
                    src={require("../images/carrusel_3.jpeg")}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      )}
      {/*<Footer />*/}
    </>
  );
}
