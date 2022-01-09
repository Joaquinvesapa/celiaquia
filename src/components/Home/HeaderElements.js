import styled from "styled-components";

export const Head = styled.div`
    background: rgb(255,247,99);
    background: linear-gradient(150deg, rgba(255,247,99,1) 0%, rgba(255,140,111,1) 100%);
    width:100%;
    min-height: 100vh;
    position: relative;
`

export const Circle = styled.div`
    position: absolute;
    background-color: #fff;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index:0;
`

export const HeadContent = styled.h2`
`

export const HeadSection = styled.div`
    width: 100%;
    height: 70vh;
    position: relative;
    background-color: grey;
    z-index: 2;
    display: block;
`