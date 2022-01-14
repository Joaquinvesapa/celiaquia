import styled from "styled-components";

export const Section = styled.div`
    position: relative;
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: left;
    flex-direction: column;
    padding: 35vh 150px;

    @media screen and (max-width: 768px) {
        align-items: center;
        padding: 35vh 0;
    }
`

export const TextContent = styled.div`
    position: relative;
    max-width: 700px; 
    padding: 0 1rem;

    @media screen and (max-width: 768px) {
        }  

    & h2 {
        font-size: 5em;
        display: flex;
        font-weight: bold;

        @media screen and (max-width: 768px) {
            font-size: 2.6em;
        }   
    }
`

export const Section2 = styled.div`
    background: rgb(255,79,183);
    background: linear-gradient(56deg, rgba(255,79,183,1) 0%, rgba(255,140,111,1) 69%);
    width:100%;
    min-height: 100vh;
    position: relative;
`
export const Button = styled.a`
    justify-content: center;
    align-items: center;  
    border-radius: 15px;
    background-color: #fff;
    display: flex;
    width: 130px;
    margin-top: 15px;
    text-decoration: none;
    color: #000;
    font-weight: bold;
`