import React from "react";
import Button from "./Button";
import { ButtonProps } from "./button.type";

const ButtonComponent = ({ primary, size = "medium", bgcolor, label, type, ...props }: ButtonProps) => {
  return (
    <>
      <Button primary={primary} size={size} bgcolor={bgcolor} label={label} type={type} />
    </>
  )
};

export default ButtonComponent;
