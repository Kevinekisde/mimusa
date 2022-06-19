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
    transition: 0.5s ease all;

    &:hover{
        transform:scale(1.1);
    }

}
h2{
    width: 100%;
    position:absolute;
    top:65%;
    left:10%;
    z-index:2;
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: 0.05em;
    color:${({theme}) => theme.parrafo};
}

.price{
    position:absolute;
    left:10%;
    top:83%;
    color:${({theme}) => theme.parrafo};
    font-weight: 800;
    font-size: 16px;
    line-height: 120%;
    letter-spacing: 0.05em;
    z-index:2;
}
.transform{
    position:absolute;
    left:10%;
    top:89%;
    color:${({theme}) => theme.parrafo};
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    letter-spacing: 0.05em;
    z-index:2;

}
`

export const Background = styled.div`
 
    width: 345.5px;
    height: 358px;
    clip-path: polygon(36% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0 36%);
    background-color: ${({theme}) => theme.cardBackground};
    border: ${({theme}) => theme.cardBorder};
    border-radius:20px;
    z-index:1;
}

`

