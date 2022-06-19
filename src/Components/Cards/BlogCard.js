import React from 'react'
import { Background, ButtonArrow, Container } from '../../Style/BlogCardStyle'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BlogCard = ({image,title,date,description}) => {
  return (
    <Container>
        <Background></Background>
        <img src={image}></img>
        <ButtonArrow className="arrowButton"><FontAwesomeIcon icon={faArrowUpRightFromSquare}></FontAwesomeIcon></ButtonArrow>
        <h2>{title}</h2>
        <p className="date">{date}</p>
        <p className="description">{description}</p>
    </Container>
  )
}

export default BlogCard