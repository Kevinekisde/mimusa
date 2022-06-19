import styled from "styled-components";
import background from '../Assets/SecondMarketBack.png'

export const Container = styled.div`
width:100%;
background: #D6302A;
padding:4%;
display:flex;
aling-items:center;
justify-content:center;

`

export const InfoContainer = styled.div`
width:100%;
height: 285px;
background: #021939;
border-radius: 10px;
display:flex;
align-items:center;
justify-content:flex-start;
position:relative;
padding:5%;
background-image: url(${background});
background-size: 100% ;
background-repeat: no-repeat;
background-position: right;
gap:20%;

`

export const TextContainer = styled.div`
margin-left: 50px;
display:flex;
flex-direction: column;
gap:20px;
h1{
    width: 630px;
    font-weight: 800;
    font-size: 30px;
    line-height: 120%;
    color:white;
    span{
        color:#0139fe;
    }
}

p{
    width: 567px;
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    letter-spacing: 0.08em;
    color: #FFFFFF;
}

`

export const FormContainer = styled.div`
display:flex;
gap:20px;
align-items:center;

input{
    background:none;
    width: 321px;
    height: 34px;
    border: 1px solid #FFFFFF;
    border-radius: 10px;
    color:white;
}
button{
    width: 161px;
    height: 34px;
    padding:7px;
    border: 1px solid #FFFFFF;
    border-radius: 10px;
    background:none;
    color:white;
    cursor:pointer;
}


`
export const CheckboxContainer = styled.div`
display:flex;
gap:10px;

input{
    border: 1px solid #FFFFFF;
    background:none;
}

p{
    width: 567px;
    font-weight: 400;
    font-size: 10px;
    line-height: 120%;
    color: #FFFFFF;
    opacity:0.8;
}

`

export const ImageContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;



`