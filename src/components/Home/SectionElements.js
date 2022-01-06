import styled from "styled-components";

export const Section = styled.div`
    position: relative;
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 150px 200px;

    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
`

export const TextContent = styled.div`
    position: relative;
    max-width: 600px; 

    & h2 {
        font-size: 4em;
        font-weight: bold;

        @media screen and (max-width: 900px) {
            font-size: 2.5em;
        }   
    }

    
    
`