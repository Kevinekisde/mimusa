import styled from "styled-components";
import LilliardBack from '../Assets/lilliardback.png'


export const Container = styled.div`
width:100%;
min-height:80vh;
background:${({theme}) => theme.background};
display:flex;
align-items:center;

.blob{
    width: 800px;
    height: 552px;
    left: 8px;
    top: 0px;
    position:absolute;
    filter:blur(12rem);

}

`

export const ContentContainer = styled.div`
z-index:1;
display:flex;
align-items:center;
justify-content:center;
gap:70px;

`

export const TextContainer = styled.div`
width:50%;

h1{
    width:70%;
    font-style: normal;
    font-weight: 800;
    font-size: 47px;
    text-align:justify;
    line-height: 120%;
    color: #FFFFFF;
    span{
        color:#d7302a;
    }
}
p{
    width:80%;
    margin-top: 10px;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 120%;
    letter-spacing: 0.05em;
    color: #FFFFFF;

    span{
        font-weight: 800;
    }

}

`

export const ButtonContainer = styled.div`
display:flex;
margin-top: 20px;
align-items: center;
gap:40px;

button{
    width: 194px;
    height: 39px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 15px;
    font-size:16px;
    border:none;
}

.create{
    background:#0039FF;
    color:white;
}
.explore{
    background:#D6302A;
    color:white;
}

`

export const ImageContainer = styled.div`

.lilliard{
    position:absolute;
    bottom:5px;
    right:12%;
    z-index:2;
}


.back{
    position:relative;
    
}

`