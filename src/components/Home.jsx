import React, { /*useState,*/ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCats } from "../redux/actions/index";
import NavBar from "./NavBar";
import Card from "./Card";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Home() {
  const dispatch = useDispatch();
  const allCats = useSelector((state) => state.cats);

  //Funciones Handle
  function handleAllCats(e) {
    e.preventDefault();
    dispatch(getCats());
  }

  useEffect(() => {
    dispatch(getCats());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Button
        variant="success"
        onClick={(e) => {
          handleAllCats(e);
        }}
      >
        All Cats
      </Button>
      <div>
        <select>
          <option>Ordenar por</option>
          <option value="Asc">Ascendente</option>
          <option value="Desc">Descendente</option>
          <option value="Mayor">Mayor edad</option>
          <option value="Menor">Menor edad</option>
        </select>

        <select>
          <option value="All">All Cats</option>
          <option value="M">Macho</option>
          <option value="H">Hembra</option>
        </select>
      </div>
      <div>
        {allCats?.map((el, index) => {
          return (
            <>
              <div key={index}>
                <Card
                  imagen={el.imagen}
                  nombre={el.nombre}
                  edad={el.edad}
                  ciudad={el.ciudad}
                />
                <Link to={"/" + el.id}>
                  <Button variant="info">Detalles</Button>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
