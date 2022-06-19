import React from 'react'
import { Container, HeaderItems, ListItems, Select } from '../../Style/HeaderStyle'

const Header = () => {
  return (
    <Container>
        <HeaderItems>
          <ListItems>
          <li>DROPS</li>
          <li>ARTISTAS</li>
          <li>PROMOCIONES</li>
          </ListItems>
          <Select>
            <option value="">ES</option>
          </Select>
        </HeaderItems>
    </Container>
  )
}

export default Header