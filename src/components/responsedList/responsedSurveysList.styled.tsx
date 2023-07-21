import styled from "styled-components";

const StyledList = styled.div`
    display: grid;
    margin: 10px 20px;
    grid-template-columns: repeat(auto-fit, 12rem);
    justify-content: space-evenly;
    gap: 1.5rem;
`

const StyledTitle = styled.h2`
    margin: 20px;
`

export { StyledList, StyledTitle }