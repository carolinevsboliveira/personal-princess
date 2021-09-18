import styled from "styled-components";
const HeaderBox = styled.div`
    font-family: 'Montserrat', sans-serif;
    display: flex; 
    align-items: center;
    justify-content: center;
    padding: 10rem;
    flex-direction: column;
`;
const TextWriter = styled.span`
    font-weight: 900;
    font-size: 3rem;
`;
const HeaderSubtitle = styled.h3`
    font-size: 1.5rem;
    color: #bbbbbb;
`;

export {TextWriter, HeaderBox,HeaderSubtitle }