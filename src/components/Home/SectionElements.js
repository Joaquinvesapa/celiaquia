import styled from "styled-components";

export const Section = styled.div`
    position: relative;
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 150px 3px;

    @media screen and (max-width: 768px) {
    }
`

export const TextContent = styled.div`
    position: relative;
    max-width: 600px; 

    & h2 {
        font-size: 3em;
        font-weight: bold;

        @media screen and (max-width: 768px) {
            font-size: 2.5em;
        }   
    }

    
    
`