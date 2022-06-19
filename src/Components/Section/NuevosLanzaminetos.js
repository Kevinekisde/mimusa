import React, { useState } from 'react'
import { ButtonsContainer, Container, InfoContainer, ObrasContainer, ObrasHeader } from '../../Style/NuevosLanzamientosStyle'
import ObrasCards from '../Cards/ObrasCards'
import Bombonera from '../../Assets/Bombonera.png'
import Maradona from '../../Assets/Maradona.png'
import Tomba from '../../Assets/Tomba.png'
import "animate.css/animate.min.css"; 
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons'


const NuevosLanzaminetos = () => {
  const [info,setInfo] = useState([
    {image:Bombonera,name:"La Bombonera -Temple Of World Football",price:"0.034 BNB",transform:"($10.88 / 10.14€)"},
    {image:Maradona,name:"El Semillero Del Mundo",price:"5 BNB",transform:"($1600.00 / 1490.50€)"},
    {image:Bombonera,name:"La Bombonera -Temple Of World Football",price:"0.034 BNB",transform:"($10.88 / 10.14€)"},
    {image:Maradona,name:"El Semillero Del Mundo",price:"5 BNB",transform:"($1600.00 / 1490.50€)"},
    {image:Maradona,name:"El Semillero Del Mundo",price:"5 BNB",transform:"($1600.00 / 1490.50€)"},
    {image:Maradona,name:"El Semillero Del Mundo",price:"5 BNB",transform:"($1600.00 / 1490.50€)"},
  ])
  const [infoCollection,setinfoCollection] = useState([
    {image:Tomba,name:"TOMBA LA BOMBA",price:"0.034 BNB",transform:"($10.88 / 10.14€)"},
    {image:Tomba,name:"TOMBA LA BOMBA",price:"0.034 BNB",transform:"($10.88 / 10.14€)"},
    {image:Tomba,name:"TOMBA LA BOMBA",price:"0.034 BNB",transform:"($10.88 / 10.14€)"},
    {image:Maradona,name:"El Semillero Del Mundo",price:"5 BNB",transform:"($1600.00 / 1490.50€)"},
    {image:Maradona,name:"El Semillero Del Mundo",price:"5 BNB",transform:"($1600.00 / 1490.50€)"},
    {image:Maradona,name:"El Semillero Del Mundo",price:"5 BNB",transform:"($1600.00 / 1490.50€)"},
  ])
  const [currentPage,setCurrentPage] = useState(1)
  const [CardsPerPage,setCardsPerPage] = useState(3)
  const [currentPageColeccion,setCurrentPageColeccion] = useState(1)
  const [ColeccionPerPage,setColeccionPerPage] = useState(3)
  const indexOfLastCard = currentPage * CardsPerPage;
  const indexOfLastColeccion = currentPageColeccion * ColeccionPerPage;
  const indexOfFirstCard = indexOfLastCard - CardsPerPage;
  const indexOfFirstColeccion = indexOfLastColeccion - ColeccionPerPage;
  const CurrentCard = info?.slice(indexOfFirstCard, indexOfLastCard)
  const CurrentColeccion = infoCollection?.slice(indexOfFirstColeccion, indexOfLastColeccion)
  const pageNumbers = []
  const pageNumbersColeccion = []
  for(let i = 1; i <= Math.ceil(info.length/CardsPerPage); i++) {
      pageNumbers.push(i)
  }
  for(let i = 1; i <= Math.ceil(infoCollection.length/ColeccionPerPage); i++) {
    pageNumbersColeccion.push(i)
  }
 
  const siguientePagina = () =>{
    let lastItem=pageNumbers[pageNumbers.length-1]
    if(currentPage >= lastItem){
      setCurrentPage(1)
    }else{

      setCurrentPage(currentPage + 1);
    }
  }
  const anteriorPagina = () =>{
    let lastItem=pageNumbers[pageNumbers.length-1]
    if(currentPage == 1){
      setCurrentPage(lastItem);
    }else{
      setCurrentPage(currentPage - 1);
    }
  }

  const siguientePaginaColeccion = () =>{
    let lastItem=pageNumbersColeccion[pageNumbersColeccion.length-1]
    if(currentPageColeccion >= lastItem){
      setCurrentPageColeccion(1)
    }else{

      setCurrentPageColeccion(currentPageColeccion + 1);
    }
  }
  const anteriorPaginaColeccion = () =>{
    let lastItem=pageNumbers[pageNumbers.length-1]
    if(currentPageColeccion == 1){
      setCurrentPageColeccion(lastItem);
    }else{
      setCurrentPageColeccion(currentPageColeccion - 1);
    }
  }
 
  return (
    <Container>
      <InfoContainer>
        <h1>DESCUBRE NUESTROS<br />NUEVOS LANZAMIENTOS</h1>
        <ObrasHeader>OBRAS DESTACADAS</ObrasHeader>
        <AnimationOnScroll animateIn="animate__fadeInUp" >
        <ObrasContainer>
          <button onClick={anteriorPagina} class="arrowLeft"><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></button>
         {CurrentCard.map((card) => (
          <ObrasCards
            image={card.image}
            name={card.name}
            price={card.price}
            transform={card.transform}
           
          />
         ))}
         <button onClick={siguientePagina} class="arrowRight"><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
        </ObrasContainer>
            </AnimationOnScroll>
        <ObrasHeader>COLECCIONES</ObrasHeader>
        <AnimationOnScroll animateIn="animate__fadeInUp" >

        <ObrasContainer>
        <button onClick={anteriorPaginaColeccion} class="arrowLeft"><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></button>
        {CurrentColeccion.map((card) => (
          <ObrasCards
            image={card.image}
            name={card.name}
            price={card.price}
            transform={card.transform}
            coleciones={true}
          />
         ))}
          <button onClick={siguientePaginaColeccion} class="arrowRight"><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
        </ObrasContainer>
            </AnimationOnScroll>
        <ButtonsContainer>
          <button>TOKEN</button>
          <button>IR AL BLOG</button>

        </ButtonsContainer>
      </InfoContainer>
    </Container>
  )
}

export default NuevosLanzaminetos