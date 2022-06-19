import React from 'react'
import { Container, ImageContainer, InfoContainer, TextContainer } from '../../Style/SectionParticipaStyle'
import Artist1 from '../../Assets/artist1.png'
import Artist2 from '../../Assets/artist2.png'
import Artist3 from '../../Assets/artist3.png'
import Artist4 from '../../Assets/artist4.png'
import blob from '../../Assets/blobaboutus.png'
import "animate.css/animate.min.css"; 
import { AnimationOnScroll } from 'react-animation-on-scroll';

const SectionParticipa = () => {
  return (
    <Container>
      <img src={blob} className="blob"></img>
        <InfoContainer>
            <ImageContainer>
              <img width="200" src={Artist1}></img>
              <img width="200" src={Artist2}></img>
              <img width="200" src={Artist3}></img>
              <img width="200" src={Artist4}></img>
            </ImageContainer>
            <TextContainer>
              
              <h1 className="title">PARTICIPA EN NUESTRO</h1>
              <h1 className="subtitle">DRAFT DE ARTISTAS</h1>
            </TextContainer>
            <button className="buttonRed">INSCRIBETE</button>
        </InfoContainer>
    </Container>
  )
}

export default SectionParticipa