import styled from "styled-components";

const StyledList = styled.div`
  display: grid;
  margin: 10px 30px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-content: start;
  grid-gap: 2rem;
`;

const StyledTitle = styled.h2`
  margin: 20px;
`;

const StyledCard = styled.div`
  width: 303px;
  height: 418px;
  cursor: pointer;
`;

export { StyledList, StyledTitle, StyledCard };
