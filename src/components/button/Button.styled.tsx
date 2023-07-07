import styled from "styled-components";
import { getButtonStyles } from "./button.type";

const ButtonSizes = {
  small: `
    padding: 10px 16px;
    font-size: 12px;
  `,
  medium: `
    padding: 11px 20px;
    font-size: 16px;
  `,
  large: `
    padding: 12px 24px;
    font-size: 20px;
  `,
};

const StyledButton = styled.button<getButtonStyles>`
  font-weight: 700;
  border : 0px;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  color: ${({ primary = false }) => (primary ? "white" : "black")};
  ${({ size }) => ButtonSizes[size || "medium"]}

  background-color: ${({ bgcolor }) => bgcolor};
`;

export { StyledButton };
