import React from "react";
import { StyledInput } from "./Input.styled";
import { InputStyles } from "./Input.type";

const InputComponent = (props: InputStyles) => {
  return <StyledInput {...props}></StyledInput>;
};

export default InputComponent;
