import React from 'react'

export default function Card({imagen, nombre, edad, sexo, ciudad}) {
  return (
    <div>
      <div>   
        <img src= {imagen} alt= "Foto Michi" width="230px" height="250px"/>
      </div>
      <div>
        <h4>{nombre}</h4>
        <h5>{edad} meses</h5>
        <h6>{sexo}</h6>
        <h6>Ciudad: {ciudad}</h6>                          
      </div>
    </div>
  )
}
