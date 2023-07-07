import React from "react";
import { StyledButton } from "./Button.styled";
import { ButtonProps } from "./button.type";

const Button = ({ primary, size = "medium", bgcolor, label, type, ...props }: ButtonProps) => {
  return (
    <>
      <StyledButton primary={primary} size={size} bgcolor={bgcolor} type={type}>
        {label}
      </StyledButton>
    </>
  );
};

export default Button;
