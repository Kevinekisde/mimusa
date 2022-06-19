import styled from "styled-components";

export const Container = styled.div`
width:100%;
background:#0039FF;
`
export const HeaderItems = styled.div`
display:flex;
padding:12px;
justify-content:space-between;
padding-left:10%;
padding-right:11%;



`

export const ListItems = styled.ul`
z-index:2;
width:32%;
display:flex;
list-style:none;
justify-content:space-between;
font-weight:600;
transition: 0.5s ease ;

li{
    transition: 0.5s ease all ;
    cursor:pointer;
    color:${({theme}) => theme.text};
    &:hover{
        color:${({theme}) => theme.hoverText};
    }
}

`

export const Select = styled.select`
background: none;
border:none;
font-size:16px;
text-align:center;
color:${({theme}) => theme.artist};
cursor:pointer;


`