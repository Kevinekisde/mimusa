import React from 'react'
import { Container, Icon, Input } from '../../Style/SearchBarStyle'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SearchBar = () => {
    return (
        <Container>
            <div>
            <Input placeholder="BUSCA TU DROP AQUI"/>
            </div>
            <Icon>
                <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
            </Icon>
        </Container>
    )
}

export default SearchBar