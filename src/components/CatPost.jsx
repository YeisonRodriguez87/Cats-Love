import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postCat } from "../redux/actions/index";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

export default function CatPost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  return (
    <>
      <h1>Publica Michis</h1>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label>Nombre:</label>
            <input type="text" name="nombre" onChange={handleChange} />
          </div>
          <div>
            <label>Sexo:</label>
            <select name="sexo" onChange={handleChange}>
              <option>Seleccione</option>
              <option value="hembra">Hembra</option>
              <option value="macho">Macho</option>
            </select>
          </div>
          <div>
            <label>Altura:</label>
            <input
              type="number"
              placeholder="En centímetros"
              name="altura"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Peso:</label>
            <input
              type="number"
              placeholder="En kilogramos"
              name="peso"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Edad:</label>
            <input
              type="number"
              placeholder="En meses"
              name="edad"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Ciudad:</label>
            <input type="text" name="ciudad" onChange={handleChange} />
          </div>
          <div>
            <label>Teléfono:</label>
            <input
              type="text"
              placeholder="Ej. 11 23456789"
              name="telefono"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Imagen:</label>
            <input
              type="text"
              placeholder="https://..."
              name="imagen"
              onChange={handleChange}
            />
          </div>
          <div>
            <textarea
              name="descripcion"
              rows="10"
              cols="50"
              onChange={handleChange}
            ></textarea>
          </div>

          <div>
            <Button type="submit">Publicar</Button>
            <Link to="/home">
              <Button variant="danger">Volver</Button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
