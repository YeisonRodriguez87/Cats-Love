import React from 'react'

export default function Card({imagen, nombre, edad, ciudad}) {
  return (
    <div>
      <div>   
        <img src= {imagen} alt= "Foto Michi" width="230px" height="250px"/>
      </div>
      <div>
        <h4>Nombre: {nombre}</h4>
        <h5>Edad: {edad} meses</h5>
        <h6>Ciudad: {ciudad}</h6>                          
      </div>
    </div>
  )
}
