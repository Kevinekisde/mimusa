import styled from "styled-components";


export const Container = styled.div`
display:flex;

div{
    position:relative;
}
`

export const Input = styled.input`
background: none;
width: 336.23px;
border: ${({theme}) => theme.searchBar};
border-top-left-radius: 10px;
border-bottom-right-radius: 15px;
padding:4px;
caret-color:white;
position:relative;
letter-spacing:0.1em;
opacity:0.5;


&:focus{
    outline:none;
}
&::-webkit-input-placeholder {
    text-align: start;
    padding-left: 10px; 
}
 
`

export const Icon = styled.div`
position:absolute;
right:30px;
top:5px;
bottom:0;
opacity:0.5;
cursor:pointer;
`