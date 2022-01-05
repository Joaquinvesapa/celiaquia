import styled from "styled-components";

export const Head = styled.div`
    background: rgb(255,247,99);
    background: linear-gradient(150deg, rgba(255,247,99,1) 0%, rgba(255,140,111,1) 100%);
    height: 600px;
    z-index: 2; 
`

export const Circle = styled.div`
    background-color: #fff;
    height: 80rem;
    width: 80rem;
    border-radius: 50%;
    position: relative;
`

export const HeadContent = styled.h2`
    position:absolute;
`

export const HeadSection = styled.div`
    height: 50rem;
    position: relative;
    background-color: grey;
    z-index: 3;
`