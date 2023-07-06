import React from "react";
import { StyledButton } from "./Button.styled";

interface ButtonProps {
  primary?: boolean;
  bgcolor: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}
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
