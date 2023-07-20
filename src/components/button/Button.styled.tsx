import styled, { css } from "styled-components";
import { ButtonStyles } from "./button.type";

const StyledButton = styled.button.attrs<ButtonStyles>((props) => ({}))`
  ${(props) => {
    const main = props.theme.colors.main;
    const bgcolor = props.bgcolor || main;
    const color = props.color || "white";

    return css`
      cursor: pointer;
      font-size: 16px;
      border: 0px;
      line-height: 1;
      height: 45px;
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
