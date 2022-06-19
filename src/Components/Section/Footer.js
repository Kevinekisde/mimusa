import React from 'react'
import Icon from '../../Assets/Group.svg'
import { Container, RedesSociales } from '../../Style/FooterStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faInstagram } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <Container>
        <img src={Icon}/>
        <h1>YA ESTA AQUI EL NUEVO TOKEN DE STADIOPLUS</h1>
        <RedesSociales>
            <a><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
            <a><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
            <a><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>

        </RedesSociales>
    </Container>
  )
}

export default Footer