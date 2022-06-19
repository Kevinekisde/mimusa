import styled from "styled-components";

export const Container = styled.div`
width:100%;
background:${({theme}) => theme.background};
display:flex;
justify-content:center;

`

export const InfoContainer = styled.div`
width:80%;
margin-left:11%;
margin-right:11%;
display:flex;
gap:40px;
flex-direction:column;
align-items:start;


h1{
width:100%;
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

`


export const ObrasHeader = styled.div`
width:100%;
color:#0039FF;
border:1px solid #0039FF;
border-left:none;
border-top:none;
border-bottom-right-radius:10px;
font-weight: 700;
font-size: 18px;
line-height: 120%;
letter-spacing: 0.1em;


`

export const ObrasContainer = styled.div`
width:100%;
display:grid;
grid-template-columns:repeat(3,1fr);
gap:14%;
position:relative;

.arrowLeft{
    font-size:18px;
    display:flex;
    align-items:center;
    justify-content:center;
    color:${({theme})=> theme.title};
    position:absolute;
    width: 43px;
    height: 43px;
    left: -90px;
    top:150px;
    background:transparent;
    border: ${({theme}) => theme.arrow};
    border-radius:50%;
    cursor:pointer;
}
.arrowRight{
    font-size:18px;
    display:flex;
    align-items:center;
    justify-content:center;
    color:${({theme})=> theme.title};
    position:absolute;
    width: 43px;
    height: 43px;
    right:-35%;
    top:150px;
    background:transparent;
    border: ${({theme}) => theme.arrow};
    border-radius:50%;
    cursor:pointer;

}

`
export const ButtonsContainer = styled.div`
width:100%;
display:flex;
justify-content:center;
gap:30px;
margin-top:10%;
margin-bottom:5%;

button{
    width: 282px;
    height: 39px;
    color:${({theme}) => theme.buttonText};
    font-weight: bold;
    font-size: 14px;
    line-height: 120%;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    background:${({theme}) => theme.buttonBackground};
    border: 2px solid #0039FF;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor:pointer;
}

`