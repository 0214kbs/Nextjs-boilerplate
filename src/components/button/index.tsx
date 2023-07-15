import React from "react";
import { ButtonProps } from "./button.type";
import { StyledButton } from "./Button.styled";

const ButtonComponent = (props: ButtonProps) => {
  return (
    <>
      <StyledButton {...props}>{props.label || "Button"}</StyledButton>
    </>
  );
};

export default ButtonComponent;
