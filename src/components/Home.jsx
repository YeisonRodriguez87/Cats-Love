import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCats, filterCatsBySex, orderCats } from "../redux/actions/index";
import Card from "./Card";
import Paginated from "./Paginated";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import styles from "./Home.module.css";
//import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Home() {
  const dispatch = useDispatch();
  const allCats = useSelector((state) => state.cats);
  const [, setOrder] = useState();
  const [loader, setLoader] = useState(true);

  //Paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [catsPerPage /*setCatsPerPage*/] = useState(8);
  const indexOfLastCat = currentPage * catsPerPage;
  const indexOfFirstCat = indexOfLastCat - catsPerPage;
  const currentCats = allCats.slice(indexOfFirstCat, indexOfLastCat);

  const paged = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //Funciones Handle
  function handleAllCats(e) {
    e.preventDefault();
    dispatch(getCats());
  }

  function handleFilterSex(e) {
    e.preventDefault();
    dispatch(filterCatsBySex(e.target.value));
  }

  const handleOrdered = (e) => {
    e.preventDefault();
    dispatch(orderCats(e.target.value));
    setOrder(e.target.value);
  };

  useEffect(() => {
    setLoader(true);
    dispatch(getCats());
    setTimeout(() => {
      setLoader(false);
    }, 4000);
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Container fluid className="mt-2 App-home">
        {/*<Container className="d-flex col-lg-5 col-10 mt-1 mb-1 mt-lg-3 mb-lg-0">
          <Row className="d-flex col-lg-11 col-10">
            <Col>
              <Form.Select size="md" className="mt-5" onChange={handleOrdered}>
                <option>Ordenar por</option>
                <option value="Asc">A-Z</option>
                <option value="Desc">Z-A</option>
                <option value="Mayor">Mayor edad</option>
                <option value="Menor">Menor edad</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Select
                size="md"
                className="mt-5"
                onChange={handleFilterSex}
              >
                <option>Filtrar por</option>
                <option value="All">Tod@s</option>
                <option value="Macho">Macho</option>
                <option value="Hembra">Hembra</option>
              </Form.Select>
            </Col>
            <Col className="col-1">
              <Button
                className="mt-5"
                size="md"
                as="input"
                type="reset"
                value="Reset Filtros"
                variant="danger"
                onClick={(e) => {
                  handleAllCats(e);
                }}
              />
            </Col>
          </Row>
        </Container>*/}
        <Paginated
          catsPerPage={catsPerPage}
          allCats={allCats.length}
          paged={paged}
        />
        <div className={styles.divCards}>
          {loader ? (
            <Loading />
          ) : (
            currentCats?.map((el, index) => {
              return (
                <>
                  <div key={index}>
                    <Card
                      imagen={el.imagen}
                      nombre={el.nombre}
                      edad={el.edad}
                      sexo={el.sexo}
                      ciudad={el.ciudad}
                    />
                    <Link to={"/detail/" + el.id}>
                      <Button variant="info">Ver más</Button>
                    </Link>
                  </div>
                </>
              );
            })
          )}
        </div>
      </Container>
      {/*<Footer />*/}
    </>
  );
}
