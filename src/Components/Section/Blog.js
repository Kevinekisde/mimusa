import React from 'react'
import { CardContainer, Container, InfoContainer } from '../../Style/BlogStyle'
import BlogCard from '../Cards/BlogCard'
import Football from '../../Assets/football.png'


const Blog = () => {
    return (
        <Container>
            <InfoContainer>
                <h1>ACTUALIDAD Y NOTICIAS<br />BLOG</h1>
                <CardContainer>
                    <BlogCard
                    image={Football}
                    title="LOREM IPSUM DOLOR SIT"
                    date="12.02.2022"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                    <BlogCard
                    image={Football}
                    title="LOREM IPSUM DOLOR SIT"
                    date="12.02.2022"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                    <BlogCard
                    image={Football}
                    title="LOREM IPSUM DOLOR SIT"
                    date="12.02.2022"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                </CardContainer>
                <button>LEER MAS</button>
            </InfoContainer>
        </Container>
    )
}

export default Blog