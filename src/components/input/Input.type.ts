import { ChangeEvent } from "react";

export interface InputStyles {
  placeholder: string;
  name?: string;
  type?: string;
  color?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
