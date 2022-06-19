import styled from "styled-components";

export const Container = styled.div`
width:80%;
display:flex;
flex-direction:column;
padding:10px;
border-radius:15px;
position:relative;
img{
    position:absolute;
    top:8%;
    left:10%;
    z-index:2;
    transition: 0.2s ease all;

}
h2{
    width:90%;
    position:absolute;
    top:63%;
    left:10%;
    z-index:2;
    font-weight: 600;
    font-size: 18px;
    line-height: 120%;
    letter-spacing: 0.05em;
    color:white;
}

.date{
    position:absolute;
    left:10%;
    top:70%;
    color:white;
    ffont-weight: 300;
    font-size: 14px;
    line-height: 120%;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    z-index:2;
    opacity:0.8;
}

.description{
    width:70%;
    position:absolute;
    left:10%;
    top:80%;
    color:white;
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    letter-spacing: 0.05em;
    z-index:2;
}

.arrowButton{
    position: absolute;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
font-size:24px;
width: 40px;
height: 40px;
right:70px;
top:40px;
background: #011C44;
color:white;
padding:10px;
border-radius: 10px;
z-index: 3;
cursor:pointer;

}

`

export const Background = styled.div`
 
    width: 345.5px;
    height: 358px;
    clip-path: polygon(36% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0 36%);
    background-color: #0039FF;
    border-radius:20px;
    z-index:1;
}

`

export const ButtonArrow = styled.button`

`