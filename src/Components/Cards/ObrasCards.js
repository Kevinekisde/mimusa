import React from 'react'
import { InfoContainer } from '../../Style/NuevosLanzamientosStyle'
import { Background, Container } from '../../Style/ObrasCardsStyle'
import Button from '../ComponentFunctional/Button'

const ObrasCards = ({ image, name, price, transform,coleccion }) => {
  return (
    <Container>
      <Background></Background>
        <img src={image}></img>
        <h2>{name}</h2>
        <p className="price">{price}</p>
        <p className="transform">{transform}</p>
        <Button
        title={coleccion == true ? "EXPLORAR":"COMPRAR"}
        color={coleccion == true ? "#0039FF":"#D6302A"}
        />
    </Container>
  )
}

export default ObrasCards