import React from "react";
import { StyledButton } from "./Button.styled";
import { ButtonProps } from "./button.type";

const Button = ({ primary = false, size = "medium", bgcolor, label, ...props }: ButtonProps) => {
  return (
    <>
      <StyledButton primary={primary} size={size} bgcolor={bgcolor}>
        {label}
      </StyledButton>
    </>
  );
};

export default Button;
