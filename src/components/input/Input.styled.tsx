import styled, { css } from "styled-components";
import { InputStyles } from "./Input.type";

const StyledInput = styled.input.attrs<InputStyles>((props) => ({
  placeholder: props.placeholder,
  name: props.name || "Basic Input",
}))`
${(props) => {
    const gray = props.theme.colors.gray;
    const bcolor = props.color || gray;
    return css`
      width:100%;
      height: 45px;
      padding: 5px;
      margin:5px 0px;
      background-color: white;
      border: solid 1.3px ${bcolor};
        &:focus {
          outline: none;
          border: solid 2px ${bcolor};
        } 
      `
  }}

`;


export { StyledInput };
