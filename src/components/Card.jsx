import React from 'react'
import styles from './Card.module.css'

export default function Card({imagen, nombre, edad, sexo, ciudad}) {
  return (
    <div className= {styles.divCard}>
      <div>   
        <img src= {imagen} className= {styles.imgCat} alt= "Foto Michi"/>
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
