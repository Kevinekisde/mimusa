import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import "@splidejs/splide/dist/css/splide.min.css";
import { Container } from '../../Style/ArtistsStyle';


const Artists = () => {
    return (
        <Container>
            <Splide
                options={{
                    type: "loop",
                    gap: "10px",
                    drag: "free",
                    arrows: false,
                    pagination: false,
                    perPage: 8,
                    autoScroll: {
                        pauseOnHover: false,
                        pauseOnFocus: false,
                        rewind: false,
                        speed: 1
                    }
                }}
                extensions={{ AutoScroll }}
            >
                <SplideSlide>
                    <h1 className="artist">Drake</h1>
                </SplideSlide>
                <SplideSlide>
                    <h1 className="artist">Kevin</h1>
                </SplideSlide>
                <SplideSlide>
                    <h1 className="artist">Ignacio</h1>
                </SplideSlide>
                <SplideSlide>
                    <h1 className="artist">Leiva</h1>
                </SplideSlide>
                <SplideSlide>
                    <h1 className="artist">Puga</h1>
                </SplideSlide>
                <SplideSlide>
                    <h1 className="artist">Catalina</h1>
                </SplideSlide>
            </Splide>
        </Container>
    )
}

export default Artists