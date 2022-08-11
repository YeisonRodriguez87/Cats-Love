import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getDetailsCat } from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";

export default function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detailCat = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(getDetailsCat(id));
  }, [dispatch, id]);

  return (
    <>
      <div>
        <img alt="foto perfil" src={detailCat.imagen} />
        <p>
          <strong>Nombre:</strong> {detailCat.nombre}
        </p>
        <p>
          <strong>Edad:</strong> {parseInt(detailCat.edad).toLocaleString()}{" "}
          meses
        </p>
        <p>
          <strong>Sexo:</strong> {detailCat.sexo}
        </p>
        <p>
          <strong>Ciudad:</strong> {detailCat.ciudad}
        </p>
        <p>
          <strong>Altura:</strong> {parseInt(detailCat.altura).toLocaleString()}{" "}
          centímetros
        </p>
        <p>
          <strong>Peso:</strong> {parseInt(detailCat.peso).toLocaleString()}{" "}
          kilogramos
        </p>
        <p>
          <strong>Teléfono:</strong> {parseInt(detailCat.telefono)}
        </p>
        <p>
          <strong>Descripción:</strong> {detailCat.descripcion}
        </p>
      </div>
      <Link to="/home">
        <Button>Inicio</Button>
      </Link>
    </>
  );
}
