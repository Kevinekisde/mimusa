import React from 'react'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ContainerButton, Icons } from '../../Style/SwitchButtonStyles'
import { useState } from 'react'

const SwitchButton = ({setTheme}) => {
    const [position,setPosition] = useState(false)

    const handleSwitchTheme = () => {
        if(position == false){
            setPosition(true)
            setTheme("light")
        }else{
            setPosition(false)
            setTheme("Dark")
        }

    }

    return (

        <ContainerButton position={position} onClick={handleSwitchTheme}>
            <Icons><FontAwesomeIcon icon={faMoon} /></Icons>
            <Icons><FontAwesomeIcon icon={faSun} /></Icons>
        </ContainerButton>

    )
}

export default SwitchButton