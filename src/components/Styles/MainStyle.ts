import styled from "styled-components";
const HeaderBox = styled.div`
  font-family: "Montserrat", sans-serif;
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
    padding-top: 1rem;
  font-size: 1.5rem;
  color: #bbbbbb;
`;
const IconGridBox = styled.div`
  padding: 2rem;
`;
const IconLink = styled.a`
  padding: 0 3rem;
`;
export { TextWriter, HeaderBox, HeaderSubtitle, IconGridBox, IconLink };
