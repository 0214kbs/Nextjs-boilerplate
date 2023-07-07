import React from "react";
import Button from "./Button";
import { ButtonProps } from "./button.type";

const ButtonComponent = ({ primary = false, size = "medium", bgcolor, label, ...props }: ButtonProps) => {
  return (
    <>
      <Button primary={primary} size={size} bgcolor={bgcolor} label={label} />
    </>
  )
};

export default ButtonComponent;
