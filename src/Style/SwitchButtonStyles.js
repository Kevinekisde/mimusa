import styled from "styled-components";

export const ContainerButton = styled.button`
width: 74.8px;
background:${({position}) => position ? '#FFFF' : "#013277" };
border:${({position}) => position ? '1px solid #0039FF' : "none" };
position:relative;
cursor:pointer;
display:flex;
outline:none;
border-radius:20px;
transition: 1s ease all;

&::after {
    content: "";
    display:block;
    border:none;
    width:30px;
    height:30px;
    position:absolute;
    background:#0039FF;
    top:0;
    left:${({position}) => position ? 'unset' : "0" };
    right:${({position}) => position ? '0' : "unset" };
    border-radius:90px;
    transition: 2s ease all;
    box-shadow: 0px 0px 2px 2px rgba(0,0,0,.2);
}


`

export const Icons = styled.span`
font-size:20px;
    width:40px;
    height:30px;
    line-height:30px;
    display:block;
    backgroun:none;
    color:#2D6AF480;
    transition: 1s ease all;
`