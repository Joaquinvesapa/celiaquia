import styled from "styled-components";

export const Head = styled.div`
    background: rgb(255,247,99);
    background: linear-gradient(150deg, rgba(255,247,99,1) 0%, rgba(255,140,111,1) 100%);
    width:100%;
    min-height: 100vh;
    position: relative;
`
export const HeadSection = styled.div`
    width: 100%;
    min-height: 100vh;
    position: relative;
    background: rgb(255,79,183);
    background: linear-gradient(56deg, rgba(255,79,183,1) 0%, rgba(255,140,111,1) 69%);
    z-index: 2;
    display: block;
`
export const HeadSection2 = styled.div`
    width: 100%;
    min-height: 100vh;
    position: relative;
    background: rgb(255,79,183);
    background: linear-gradient(147deg, rgba(255,79,183,1) 22%, rgba(111,74,247,1) 100%);
    z-index: 2;
    display: block;
`

export const Circle = styled.div`
    position: absolute;
    background-color: #fff;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 3;
    opacity: 90%
    `
