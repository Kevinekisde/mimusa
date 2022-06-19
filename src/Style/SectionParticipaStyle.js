import styled from "styled-components";

export const Container = styled.div`
width:100%;
background:${({theme}) => theme.background};
display:flex;
justify-content:center;
position:relative;

.blob{
    position: absolute;
    width: 500px;
    height: 400.97px;
    left: 1200.66px;
    top: 130.24px;
    z-index:0;
    filter:blur(12rem);
}

`
export const InfoContainer = styled.div`
margin-top:5%;
display:flex;
flex-direction:column;
align-items:center;
z-index:1;
.buttonRed{
    position:relative;
    width: 282px;
    height: 39px;
    background: #D6302A;
    color:white;
    letter-spacing:0.1em;
    font-weight:bold;
    font-size:16px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 15px;
    border:none;
    margin-top:20px;
    margin-bottom:60px;
    cursor:pointer;
    box-shadow: ${({theme}) => theme.buttonRedHoverNone};
    transition: 0.5s ease all;

    &:hover{
        box-shadow: ${({theme}) => theme.buttonRedHover};
    }
}
`
export const ImageContainer = styled.div`
display:flex;
gap:15px;

`

export const TextContainer = styled.div`
margin-top:5%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:${({theme}) => theme.title};

.title{
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    letter-spacing: 0.1em;
}
.subtitle{
    font-weight: bold;
    font-size: 30px;
    line-height: 120%;
    letter-spacing: 0.1em;
}



`