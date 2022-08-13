import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { postCat } from "../redux/actions/index";
import { useDispatch } from "react-redux";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import Loading from "./Loading";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function CatPost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const [input, setInput] = useState({
    nombre: "",
    sexo: "",
    altura: "",
    peso: "",
    edad: "",
    ciudad: "",
    telefono: "",
    imagen: "",
    descripcion: "",
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postCat(input));
    alert("Michi publicad@ con éxito!!");
    setInput({
      nombre: "",
      sexo: "",
      altura: "",
      peso: "",
      edad: "",
      ciudad: "",
      telefono: "",
      imagen: "",
      descripcion: "",
    });
    navigate("/home");
  }

  useEffect(() => {
    setLoader(true);
    dispatch(postCat());
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, [dispatch]);

  return (
    <>
      <NavBar />
      {loader ? (
        <Loading />
      ) : (
        <Container fluid className="col-5 mt-5 mb-5">
          <h1>Publica un Michi</h1>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Row>
              <Col>
                <Form.Group className="mb-4 mt-4" controlId="nombre">
                  <Form.Control
                    type="text"
                    autoComplete="off"
                    name="nombre"
                    onChange={handleChange}
                    placeholder="Nombre"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Select
                  className="mb-4 mt-4"
                  name="sexo"
                  onChange={handleChange}
                >
                  <option>Seleccione sexo</option>
                  <option value="Hembra">Hembra</option>
                  <option value="Macho">Macho</option>
                </Form.Select>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-4" controlId="altura">
                  <Form.Control
                    type="number"
                    autoComplete="off"
                    name="altura"
                    onChange={handleChange}
                    placeholder="Altura en centímetros"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-4" controlId="peso">
                  <Form.Control
                    type="number"
                    autoComplete="off"
                    name="peso"
                    onChange={handleChange}
                    placeholder="Peso en kilogramos"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-4" controlId="edad">
                  <Form.Control
                    type="number"
                    autoComplete="off"
                    name="edad"
                    onChange={handleChange}
                    placeholder="Edad en meses"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-4" controlId="ciudad">
                  <Form.Control
                    type="text"
                    autoComplete="off"
                    name="ciudad"
                    onChange={handleChange}
                    placeholder="Ciudad"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-4" controlId="telefono">
                  <Form.Control
                    type="tel"
                    autoComplete="off"
                    name="telefono"
                    onChange={handleChange}
                    placeholder="Teléfono"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-4" controlId="imagen">
                  <Form.Control
                    type="text"
                    autoComplete="off"
                    name="imagen"
                    onChange={handleChange}
                    placeholder="Imagen https://..."
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="descripcion">
              <Form.Control
                name="descripcion"
                autoComplete="off"
                placeholder="Descripción"
                as="textarea"
                rows={3}
                onChange={handleChange}
              />
            </Form.Group>

            <Button className="m-2" variant="success" type="submit">
              Publicar
            </Button>
          </Form>
        </Container>
      )}
      <Footer />
    </>
  );
}
