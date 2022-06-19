import styled from "styled-components";

export const Container = styled.div`
width:100%;
background:${({theme}) => theme.background};
display:flex;
justify-content:center;
align-items:center;
position:relative;

.blob{
    position: absolute;
    width: 700.05px;
    height: 371.97px;
    right:50px;
    top: 300;
    z-index:0;
    filter:blur(12rem);

}

`

export const InfoContainer = styled.div`
margin-top: 10px;
width:100%;
display:flex;
align-items:center;
justify-content:center;
gap:20px;

`
export const ImageContainer = styled.div`
img{
    animation: ilustrationAnimate ease-in 1s infinite alternate;
}
@keyframes ilustrationAnimate{
    0%{
        transform: scale(1);
    }100%{
        transform: scale(1.04);
    }
}

`
export const TextContainer = styled.div`
width:33%;
display:flex;
flex-direction:column;
margin-bottom:40px;
z-index:1;

h1{
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    letter-spacing: 0.1em;
    color:${({theme}) => theme.title};
    margin-bottom:5px;

}
h2{
    font-weight: 800;
    font-size: 30px;
    line-height: 120%;
    color:${({theme}) => theme.title};

    span{
        color:${({theme}) => theme.span};
    }
}

p{
    margin-top:60px;
    color:${({theme}) => theme.title};
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    letter-spacing: 0.05em;
}

`
