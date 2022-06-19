import React from 'react'
import { CheckboxContainer, Container, FormContainer, ImageContainer, InfoContainer, TextContainer } from '../../Style/SecondMarketStyle'
import RedPlayer from '../../Assets/RedPlayer.png'
import YellowPlayer from '../../Assets/YellowPlayer.png'
import "animate.css/animate.min.css"; 
import { AnimationOnScroll } from 'react-animation-on-scroll';

const SecondMarket = () => {
    return (
        <Container>
            <InfoContainer>
                <TextContainer>
                    <h1>YA ESTÁ AQUÍ EL NUEVO TOKEN DE <span>STADIOPLUS</span></h1>
                    <p>El token que revolucionará el modelo de <strong>monetización</strong> del mundo del deporte y los eSports gracias a los <strong>NFTs.</strong></p>
                    <FormContainer>
                        <input></input>
                        <button>Join the waitlist.</button>
                    </FormContainer>
                    <CheckboxContainer>
                        <input type="checkbox"></input>
                        <p>I understand I can unsubscribe at any time. Privacy Policy</p>
                    </CheckboxContainer>
                </TextContainer>
                <ImageContainer>
                <AnimationOnScroll animateIn="animate__fadeInUp">
                    <img src={RedPlayer}/>
                    <img src={YellowPlayer}/>
                    <img src={RedPlayer}/>
                </AnimationOnScroll>
                </ImageContainer>
            </InfoContainer>
        </Container>
    )
}

export default SecondMarket