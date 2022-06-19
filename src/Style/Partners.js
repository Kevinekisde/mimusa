import styled from "styled-components";

export const Container = styled.div`
height: 245px;
background: ${({theme}) => theme.background};
display:flex;
align-items:center;
justify-content: center;

`

export const InfoContainer = styled.div`
width:78%;
display:flex;
align-items:center;
gap:15%;



img{
    width:70%;
    opacity:0.5;
    height:100%;
    background:${({theme}) => theme.backgroundPartners};
}

`

export const TextContainer = styled.div`
h1{
    font-weight: 600;
    font-size: 18px;
    line-height: 120%;
    letter-spacing: 0.1em;
    color:${({theme}) => theme.title};
}

h2{
    margin-top: 5px;
    font-weight: 800;
    font-size: 36px;
    line-height: 120%;
    color:${({theme}) => theme.title};
    letter-spacing:0.1em;
}
`