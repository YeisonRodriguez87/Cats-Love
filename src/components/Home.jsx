import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCats, filterCatsBySex, orderCats } from "../redux/actions/index";
import Card from "./Card";
import Paginated from "./Paginated";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import styles from "./Home.module.css";
import Footer from "./Footer";
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
    }, 1500);
  }, [dispatch]);

  return (
    <> 
      <NavBar />     
      <Container fluid className="mt-2">
        <Button className="m-2" as="input" type="reset" value="Reset" variant="danger" onClick={(e) => {
            handleAllCats(e);
        }}/>
        <div>
          <label>Ordenar por</label>
          <select onChange={handleOrdered}>
            <option value="Asc">A-Z</option>
            <option value="Desc">Z-A</option>
            <option value="Mayor">Mayor edad</option>
            <option value="Menor">Menor edad</option>
          </select>
          <label>Filtrar por</label>
          <select onChange={handleFilterSex}>
            <option value="All">Tod@s</option>
            <option value="Macho">Macho</option>
            <option value="Hembra">Hembra</option>
          </select>
        </div>
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
                    <Link to={"/" + el.id}>
                      <Button variant="success">Ver más</Button>
                    </Link>
                  </div>
                </>
              );
            })
          )}
        </div>
        <Footer />
      </Container>
    </>
  );
}
