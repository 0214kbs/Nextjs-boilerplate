import { ChangeEvent } from "react";

export interface InputStyles {
  placeholder?: string;
  name?: string;
  type?: string;
  color?: string;

  defaultValue?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: any) => any;
}
