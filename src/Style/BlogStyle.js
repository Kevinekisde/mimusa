import styled from "styled-components";

export const Container = styled.div`
width:100%;
background:${({theme}) => theme.background};
display:flex;
justify-content:center;

`
export const InfoContainer = styled.div`
margin-top: 5%;
width:100%;
margin-left:11%;
margin-right:11%;
display:flex;
gap:40px;
flex-direction:column;
align-items:start;


h1{
width:30%;
color:${({theme}) => theme.title};
font-style: normal;
font-weight: 800;
font-size: 28px;
line-height: 120%;
letter-spacing:0.1em;
    &:first-line{
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    letter-spacing: 0.1em;
    }

}

button{
    width: 282px;
    height: 39px;
    color:white;
    font-weight: 800;
    letter-spacing: 0.1em;
    background: #D6302A;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 15px;
    border:none;
    margin-bottom:5%;
    cursor:pointer;
    box-shadow: ${({theme}) => theme.buttonRedHoverNone};
    transition: 0.5s ease all;

    &:hover{
        box-shadow: ${({theme}) => theme.buttonRedHover};
    }
}

`

export const CardContainer = styled.div`
width:110%;
display:grid;
grid-template-columns:repeat(3,1fr);

`