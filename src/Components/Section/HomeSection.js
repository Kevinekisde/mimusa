import React from 'react'
import blob from '../../Assets/blobHome.png'
import Lilliard from '../../Assets/Lilliard.png'
import LilliardBack from '../../Assets/lilliardback.png'
import { ButtonContainer, Container, ContentContainer, ImageContainer, TextContainer } from '../../Style/HomeSectionStyle'
import "animate.css";

const HomeSection = () => {
    return (
        <Container>
            <img className="blob" src={blob}/>
            <div class="animate__animated animate__fadeInUp">
            <ContentContainer>
                <TextContainer>
                    <h1>DESCUBRE, COLECCIONA Y COMPRA INCREÍBLES <span>NFTs</span></h1>
                    <p>StadioPlus es el primer mercado NFT de la comunidad del deporte. Descubre la oportunidad de poseer, vender y comercializar NFT. <span>Explora el mercado para empezar.</span></p>
                    <ButtonContainer>
                        <button class="create">CREA TU NFT</button>
                        <button class="explore">EXPLORAR</button>

                    </ButtonContainer>
                </TextContainer>
                <ImageContainer>
                    <img class="lilliard" src={Lilliard}></img>
                  
                    <img class="back" src={LilliardBack}></img>
                </ImageContainer>
            </ContentContainer>
            </div>
        </Container>
    )
}

export default HomeSection