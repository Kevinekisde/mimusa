import styled from "styled-components";


export const Container = styled.div`
width:100%;
background:${({theme}) => theme.background}

`

export const NavbarItemsContainer = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
z-index:3;
`
export const NavbarItems = styled.ul`
display:flex;
justify-content:center;
gap:4%;
align-items:center;
padding:2%;
width:100%;
list-style:none;
color:${({theme}) => theme.parrafo};
font-weight:500;
letter-spacing:0.1em;
cursor:pointer;
z-index:3;

.Text{
    opacity:0.5;
    transition: 0.5s ease all;
    &:hover{
        opacity:1;
    }
}


`

export const Button = styled.button`
width: 189px;
padding: 10px;
background-color:#D6302A;
color:white;
letter-spacing:0.1em;
border-top-left-radius: 10px;
border-bottom-right-radius: 15px;
font-weight:bold;
border:none;
cursor:pointer;

`