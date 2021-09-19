import styled from "styled-components";
const HeaderBox = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9rem 0 5rem 0;
  flex-direction: column;
`;
const TextWriter = styled.span`
  font-weight: 900;
  font-size: 3rem;
`;
const HeaderSubtitle = styled.h3`
    width: 20rem;
    padding-top: 1rem;
  font-size: 1.5rem;
  color: #bbbbbb;
`;
const IconGridBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem 0;
`;
const IconLink = styled.a`
  padding: 0 3rem;
`;
const GridBox = styled.div`
  padding: 0 2em 5em 0;
`;
const CardBox = styled.div`
  padding-bottom: 2rem;
`;
export { TextWriter, HeaderBox, HeaderSubtitle, IconGridBox, IconLink, GridBox, CardBox };
