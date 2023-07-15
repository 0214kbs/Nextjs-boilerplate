import React from "react";
import { ButtonStyles } from "./button.type";
import { StyledButton } from "./Button.styled";

const ButtonComponent = (props: ButtonStyles) => {
  return (
    <>
      <StyledButton {...props}>{props.label || "Button"}</StyledButton>
    </>
  );
};

export default ButtonComponent;
