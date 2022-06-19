import styled from "styled-components";

export const Container = styled.div`
width:100%;
background:#0039FF;

.artist{
    padding:3px;
    color:${({theme}) => theme.artist};
    display: list-item;
    font-weight: 600;
    font-size: 25px;
    line-height: 120%;
    letter-spacing: 0.2em;
    &:before {
        content:"• ";
        font-size: 28px;
    }
}
`
