import React from 'react'
import { ButtonStyleContainer } from '../../Style/ButtonStyle'

const Button = ({title,color}) => {
  
  return (
    <ButtonStyleContainer style={{background:color}}>{title}</ButtonStyleContainer>
  )
}

export default Button