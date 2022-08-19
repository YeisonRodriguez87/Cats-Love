import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { postCat } from "../redux/actions/index";
import { useDispatch } from "react-redux";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import Loading from "./Loading";
import NavBar from "./NavBar";
//import Footer from "./Footer";
import { Formik, ErrorMessage } from "formik";
import styles from "./CatPost.module.css";
import Swal from "sweetalert2";

export default function CatPost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);
    dispatch(postCat());
    setTimeout(() => {
      setLoader(false);
    }, 2500);
  }, [dispatch]);

  return (
    <>
      <NavBar />
      {loader ? (
        <Loading />
      ) : (
        <Container fluid className="col-lg-6 col-md-8 col-10 mt-5 mb-5">
          <Formik
            initialValues={{
              nombre: "",
              sexo: "",
              altura: "",
              peso: "",
              edad: "",
              ciudad: "",
              telefono: "",
              imagen: "",
              descripcion: "",
            }}
            validate={(input) => {
              let errors = {};
              let regexNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
              let regexTel = /^\d{10}$/;
              //eslint-disable-next-line
              let regexURL = /(http|https):\/\/[a-zA-Z\.\/-]+/;

              if (!input.nombre.trim()) {
                errors.nombre = "*Nombre requerido";
              } else if (!regexNombre.test(input.nombre.trim())) {
                errors.nombre =
                  "*El campo nombre solo acepta letras y espacios en blanco";
              }
              if (!input.sexo) {
                errors.sexo = "*Sexo requerido";
              }
              if (!input.altura) {
                errors.altura = "*Altura requerida";
              } else if (input.altura < 1 || input.altura > 30) {
                errors.altura = "*La altura debe ser entre 1 y 30 centímetros";
              }
              if (!input.peso) {
                errors.peso = "*Peso requerido";
              } else if (input.peso < 1 || input.peso > 10) {
                errors.peso = "*El peso debe ser entre 1 y 10 kilogramos";
              }
              if (!input.edad) {
                errors.edad = "*Edad requerida";
              } else if (input.edad < 1 || input.edad > 20) {
                errors.edad = "*La edad debe ser entre 1 y 20 años";
              }
              if (!input.ciudad.trim()) {
                errors.ciudad = "*Ciudad requerida";
              } else if (!regexNombre.test(input.ciudad.trim())) {
                errors.ciudad =
                  "*El campo ciudad solo acepta letras y espacios en blanco";
              }
              if (!input.telefono.trim()) {
                errors.telefono = "*Teléfono requerido";
              } else if (!regexTel.test(input.telefono.trim())) {
                errors.telefono =
                  "*El número de teléfono debe contener 10 dígitos";
              }
              if (!input.imagen.trim()) {
                errors.imagen = "*Imagen requerida";
              } else if (!regexURL.test(input.imagen.trim())) {
                errors.imagen =
                  "*EL formato es inválido, ingrese una URL válida";
              }
              if (!input.descripcion.trim()) {
                errors.descripcion = "*Ingrese una descripción";
              }
              return errors;
            }}
            onSubmit={(input, { resetForm }) => {
              dispatch(postCat(input));
              resetForm();
              Swal.fire({
                icon: "success",
                title: "Michi publicad@ con éxito!",
                showConfirmButton: false,
                timer: 2500,
              });
              navigate("/home");
            }}
          >
            {({ values, errors, handleSubmit, handleChange, handleBlur }) => (
              <Form onSubmit={handleSubmit}>
                <h1>Datos del Michi</h1>
                <Row>
                  <Col className="col-lg-6 col-12 mt-5 mb-1 mt-lg-3 mb-lg-0">
                    <Form.Group controlId="nombre">
                      <Form.Control
                        type="text"
                        autoComplete="off"
                        name="nombre"
                        placeholder="Nombre"
                        value={values.nombre}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage
                        name="nombre"
                        component={() => (
                          <p className={styles.pErrors}>{errors.nombre}</p>
                        )}
                      />
                    </Form.Group>
                  </Col>
                  <Col className="col-lg-6 col-12 mt-3 mb-4">
                    <Form.Select
                      name="sexo"
                      value={values.sexo}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option>Seleccione sexo</option>
                      <option value="Hembra">Hembra</option>
                      <option value="Macho">Macho</option>
                    </Form.Select>
                    <ErrorMessage
                      name="sexo"
                      component={() => (
                        <p className={styles.pErrors}>{errors.sexo}</p>
                      )}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col className="col-lg-6 col-12">
                    <Form.Group className="mb-4" controlId="altura">
                      <Form.Control
                        type="number"
                        autoComplete="off"
                        name="altura"
                        placeholder="Altura en centímetros"
                        value={values.altura}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage
                        name="altura"
                        component={() => (
                          <p className={styles.pErrors}>{errors.altura}</p>
                        )}
                      />
                    </Form.Group>
                  </Col>
                  <Col className="col-lg-6 col-12">
                    <Form.Group className="mb-4" controlId="peso">
                      <Form.Control
                        type="number"
                        autoComplete="off"
                        name="peso"
                        placeholder="Peso en kilogramos"
                        value={values.peso}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage
                        name="peso"
                        component={() => (
                          <p className={styles.pErrors}>{errors.peso}</p>
                        )}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-lg-6 col-12">
                    <Form.Group className="mb-4" controlId="edad">
                      <Form.Control
                        type="number"
                        autoComplete="off"
                        name="edad"
                        placeholder="Edad en meses"
                        value={values.edad}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage
                        name="edad"
                        component={() => (
                          <p className={styles.pErrors}>{errors.edad}</p>
                        )}
                      />
                    </Form.Group>
                  </Col>
                  <Col className="col-lg-6 col-12">
                    <Form.Group className="mb-4" controlId="ciudad">
                      <Form.Control
                        type="text"
                        autoComplete="off"
                        name="ciudad"
                        placeholder="Ciudad"
                        value={values.ciudad}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage
                        name="ciudad"
                        component={() => (
                          <p className={styles.pErrors}>{errors.ciudad}</p>
                        )}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-lg-6 col-12">
                    <Form.Group className="mb-4" controlId="telefono">
                      <Form.Control
                        type="tel"
                        autoComplete="off"
                        name="telefono"
                        placeholder="Teléfono 11 23456789"
                        value={values.telefono}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage
                        name="telefono"
                        component={() => (
                          <p className={styles.pErrors}>{errors.telefono}</p>
                        )}
                      />
                    </Form.Group>
                  </Col>
                  <Col className="col-lg-6 col-12">
                    <Form.Group className="mb-4" controlId="imagen">
                      <Form.Control
                        type="text"
                        autoComplete="off"
                        name="imagen"
                        placeholder="Imagen https://..."
                        value={values.imagen}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage
                        name="imagen"
                        component={() => (
                          <p className={styles.pErrors}>{errors.imagen}</p>
                        )}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group
                  className="col-12 mt-2 mb-1"
                  controlId="descripcion"
                >
                  <Form.Control
                    name="descripcion"
                    autoComplete="off"
                    placeholder="Descripción"
                    as="textarea"
                    rows={3}
                    value={values.descripcion}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage
                    name="descripcion"
                    component={() => (
                      <p className={styles.pErrors}>{errors.descripcion}</p>
                    )}
                  />
                </Form.Group>
                <Button className="m-2" variant="success" type="submit">
                  Publicar
                </Button>
              </Form>
            )}
          </Formik>
        </Container>
      )}
      {/*<Footer />*/}
    </>
  );
}
