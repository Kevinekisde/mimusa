import React from 'react';
import Icon from '../../Assets/Group.svg'
import IconLight from '../../Assets/logoLight.png'
import { Button, Container, NavbarItems, NavbarItemsContainer } from '../../Style/NavbarStyles.js'
import SearchBar from '../ComponentFunctional/SearchBar';
import SwitchButton from '../ComponentFunctional/SwitchButton';

const Navbar = ({theme,setTheme}) => {
  return (
    <Container>
        <NavbarItemsContainer>
          <NavbarItems>
            <li><img src={theme == "light" ? IconLight : Icon}></img></li>
            <li><SearchBar /></li>
            <li className="Text">MIS COLECCIONES</li>
            <li className="Text">LOGIN</li>
            <li><Button>REGISTRARSE</Button></li>
            <li><SwitchButton setTheme={setTheme}/></li>
          </NavbarItems>

        </NavbarItemsContainer>
    </Container>
  )
}

export default Navbar