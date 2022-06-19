import React from 'react'
import AboutUsBlob from '../../Assets/blobaboutus.png'
import AboutUsImage from '../../Assets/Aboutus.png'
import { Container, ImageContainer, InfoContainer, TextContainer } from '../../Style/AboutUsStyle'

const AboutUs = () => {
  return (
    <Container>
      <img className="blob" src={AboutUsBlob}/>
        <InfoContainer>
            <ImageContainer>
                <img src={AboutUsImage}></img>
            </ImageContainer>
            <TextContainer>
                <h1>CONÓCENOS</h1>
                <h2>ACERCA DE NOSOTROS</h2>
                <p>StadioPlus es una empresa web3 que tiende un puente entre el mundo del deporte y los NFTs, democratizaremos el acceso a los aficionados al deporte permitiendo que todos descubran, recopilen, compren y vendan NFT de deporte.</p>
            </TextContainer>
        </InfoContainer>
    </Container>
  )
}

export default AboutUs