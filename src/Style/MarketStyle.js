import styled from "styled-components";


export const Container = styled.div`
width:100%;
background-color: #0039FF;
padding:4%;
display:flex;
aling-items:center;
justify-content:center;

`

export const InfoContainer = styled.div`
width:100%;
background: #001d44;
border-radius: 10px;
display:flex;
align-items:center;
justify-content:flex-start;
position:relative;

`

export const TextContainer = styled.div`
margin-left: 10%;
display:flex;
flex-direction: column;
gap:20px;
z-index:3;
h1{
    width:90%;
    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    line-height: 120%;
    text-transform:uppercase;
    color:white;
    span{
        color:#c92f2c;
    }
}
p{
    width:65%;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    color:white;
}

button{
    width: 282px;
    height: 39px;
    font-weight: 800;
    background: #D6302A;
    color:white;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 15px;
    cursor:pointer;
    border:none;
    cursor:pointer;
    box-shadow: ${({theme}) => theme.buttonRedHoverNone};
    transition: 0.5s ease all;

    &:hover{
        box-shadow: ${({theme}) => theme.buttonRedHover};
    }

}

`

export const ImageContainer = styled.div`



.cardimage{
    position:relative;
    transform:scale(1.1);
    z-index:1;
}

.cardback{
    width: 100%;
    height:98%;
    position:absolute;
    top:0;
    right:0;
    z-index:0;
    opacity:0.5;
}
`