import React from 'react'
import { Container, InfoContainer, TextContainer } from '../../Style/Partners'
import PartnersImage from '../../Assets/Partners.png'
import PartnersImageLight from '../../Assets/partnerslight.png'

const Partners = ({theme}) => {
  return (
    <Container>
    <InfoContainer>
        <TextContainer>
        <h1>Descubre Nuestros</h1>
        <h2>Partners</h2>
        </TextContainer>
        <img src={theme == "light" ? PartnersImageLight : PartnersImage}></img>

    </InfoContainer>
    </Container>
  )
}

export default Partners