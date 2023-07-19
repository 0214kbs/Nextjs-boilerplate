import styled, { css } from "styled-components";
import { ButtonStyles } from "./button.type";

const StyledButton = styled.button.attrs<ButtonStyles>((props) => ({}))`
  ${(props) => {
    const main = props.theme.colors.main;
    const bgcolor = props.bgcolor || main;
    const color = props.color || "white";

    return css`
      cursor: pointer;
      border: 0px;
      border-radius: 5px;
      line-height: 1;
      padding: 10px;
      width:100%;
      background-color: ${bgcolor};
      color: ${color};

        &:hover{
          opacity:0.5;
        }
      `;
  }};
`;

export { StyledButton };
