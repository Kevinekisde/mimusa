import React from 'react'
import CupImage from '../../Assets/CupImage.png'
import MarketBack from '../../Assets/marketBack.png'
import { Container, ImageContainer, InfoContainer, TextContainer } from '../../Style/MarketStyle'
import "animate.css/animate.min.css"; 
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Market = () => {
  return (
    <Container>
        <InfoContainer>
            <TextContainer>
            <h1>Conoce EL NUEVO MARKETPLACE NFT <span>STADIOPLUS</span></h1>
            <p>Podrás conseguir cualquier NFT de deporte de la red <strong> ethereum y BSC </strong> con solo un 1% de comisión.</p>
            <button>MERCADO SECUNDARIO</button>
            </TextContainer>
            <ImageContainer>
              <AnimationOnScroll animateIn="animate__fadeInUp">
                <img src={CupImage} class="cardimage"></img>
              </AnimationOnScroll>
                <img src={MarketBack} class="cardback"></img>
            </ImageContainer>

        </InfoContainer>
    </Container>
  )
}

export default Market